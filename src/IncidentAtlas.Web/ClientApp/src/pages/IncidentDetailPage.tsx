import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './IncidentDetailPage.css';
import { getIncidentDetail, appendIncidentEvent, previewSummary, previewPostmortem } from '../api/incidentApi';
import type { IncidentDetailDto } from '../types/incident';
import { IncidentEventType, IncidentSeverity, IncidentStatus, AppendIncidentEventRequest } from '../types/incident';
import { getEnumDisplayName } from '../utils/enumUtils';
import AppendEventModal from '../components/AppendEventModal';
import type { AiPreviewResult } from '../types/ai';
import { BlinkBlur } from 'react-loading-indicators';

const IncidentDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [incident, setIncident] = useState<IncidentDetailDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [summary, setSummary] = useState<AiPreviewResult | null>(null);
    const [loadingSummary, setLoadingSummary] = useState(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);

    const [postmortem, setPostmortem] = useState<AiPreviewResult | null>(null);
    const [loadingPostmortem, setLoadingPostmortem] = useState(false);
    const [publishState, setPublishState] = useState<"idle" | "publishing" | "published">("idle");

    const scrollToEvent = (eventId: string) => {
        const element = document.getElementById(eventId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('highlight');
            setTimeout(() => {
                element.classList.remove('highlight');
            }, 2000); // Highlight lasts for 2 seconds
        }
    };

    useEffect(() => {
        const fetchIncident = async () => {
            try {
                if (id) {
                    const data = await getIncidentDetail(id);
                    setIncident(data);
                }
            } catch (err) {
                setError('Failed to fetch incident details.');
            } finally {
                setLoading(false);
            }
        };

        fetchIncident();
    }, [id]);

    const handleSubmit = async (formData: AppendIncidentEventRequest) => {
        setFormError(null);

        try {
            if (id) {
                await appendIncidentEvent(id, formData);
                const updatedIncident = await getIncidentDetail(id);
                setIncident(updatedIncident);
                setIsModalOpen(false);
            }
        } catch (err: any) {
            if (err.response?.status === 409 && err.response?.data?.error === 'concurrency_conflict') {
                setFormError(err.response.data.message || 'Concurrency conflict occurred. Please try again.');
            } else {
                setFormError('Failed to append event. Please try again.');
            }
        }
    };

    const handleGenerateSummary = async () => {
        if (id) {
            setLoadingSummary(true);
            setSummaryError(null);
            setSummary(null);
            try {
                const result = await previewSummary(id);
                setSummary(result);
            } catch (err: any) {
                setSummaryError(err?.message ?? "Failed to generate summary");
            } finally {
                setLoadingSummary(false);
            }
        }
    };

    const handleGeneratePostmortem = async () => {
        if(id) {
            setLoadingPostmortem(true);
            try {
                const result = await previewPostmortem(id);
                setPostmortem(result);
                setPublishState("idle");
            } finally {
                setLoadingPostmortem(false);
            }
        }
    };

    if (loading) {
        return <div className="incident-detail-container">Loading...</div>;
    }

    if (error) {
        return <div className="incident-detail-container">{error}</div>;
    }

    if (!incident) {
        return <div className="incident-detail-container">Incident not found.</div>;
    }

    return (
        <div className="incident-detail-container">
            <div className="button-container">
                <button onClick={() => navigate('/')}>Back to Home</button>
                <button onClick={() => setIsModalOpen(true)} className="append-event-button">Append Event</button>
            </div>

            <h1>Incident Details</h1>
            <div className="incident-detail">
                <p><strong>Title:</strong> {incident.title}</p>
                <p><strong>Severity:</strong> {getEnumDisplayName(IncidentSeverity, incident.severity)}</p>
                <p><strong>Status:</strong> {getEnumDisplayName(IncidentStatus, incident.status)}</p>
                <p><strong>Created At:</strong> {new Date(incident.createdAtUtc).toLocaleString(undefined, { timeZone: 'UTC', timeZoneName: 'short' })}</p>
                <p><strong>Details:</strong> {incident.events[0]?.details}</p>
                <p><strong>Created By:</strong> {incident.events[0]?.createdBy}</p>
            </div>

            <div className="button-container-right">
                <button onClick={handleGenerateSummary} disabled={loadingSummary}>Generate Summary</button>
                <button onClick={handleGeneratePostmortem} disabled={loadingPostmortem}>Generate Postmortem</button>
            </div>

            {loadingSummary && (
                <div className="loading-container">
                    <BlinkBlur color="#d9d9d9" size="small" />
                </div>
            )}

            {summary && (
                <div className="summary-container">
                    <h2>Summary</h2>
                    <p><strong>Generated At:</strong> {new Date(summary.generatedAtUtc).toLocaleString()}</p>
                    <div>
                        <p><strong>Content:</strong></p>
                        <div className="content-markdown">
                            {summary.contentMarkdown.split('\n').map((line, index) => (
                                <p className="short-paragraph" key={index}>{line}</p>
                            ))}
                        </div>
                    </div>

                    {summary.citations.length > 0 && (
                        <div>
                            <p><strong>Citations:</strong></p>
                            <div className="content-markdown">
                                {summary.citations.map((citation) => (
                                    <div key={citation.incidentEventId}>
                                        <p
                                            className="short-paragraph"
                                            onClick={() => scrollToEvent(citation.incidentEventId)}
                                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                        >
                                            <strong>[{citation.sequence}]</strong> -- {citation.reason && citation.reason}
                                        </p>
                                        {citation.quote && <p className="citation-quote"><strong>Quote:</strong> {citation.quote}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <h2>Events</h2>
            <table className="incident-events-table">
                <thead>
                    <tr>
                        <th>Sequence</th>
                        <th>Occurred At</th>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Created By</th>
                    </tr>
                </thead>
                <tbody>
                    {incident.events.map(event => (
                        <tr key={event.incidentEventId} id={event.incidentEventId} className="event-row">
                            <td>{event.sequence}</td>
                            <td>{new Date(event.occurredAtUtc).toLocaleString(undefined, { timeZone: 'UTC', timeZoneName: 'short' })}</td>
                            <td>{getEnumDisplayName(IncidentEventType, event.type)}</td>
                            <td>{event.title}</td>
                            <td>{event.details || 'N/A'}</td>
                            <td>{event.createdBy || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <AppendEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                formError={formError}
            />
        </div>
    );
};

export default IncidentDetailPage;