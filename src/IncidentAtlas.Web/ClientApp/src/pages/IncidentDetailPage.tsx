import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';
import './IncidentDetailPage.css';
import {
    getIncidentDetail,
    appendIncidentEvent,
    previewSummary,
    previewPostmortem
} from '../api/incidentApi';
import type { IncidentDetailDto } from '../types/incident';
import {
    IncidentEventType,
    IncidentSeverity,
    IncidentStatus,
    AppendIncidentEventRequest
} from '../types/incident';
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
    const [postmortemError, setPostmortemError] = useState<string | null>(null);

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

    // const handlePublishPostmortem = async () => {
    //     if (!id || !postmortem) return;
    //     setPublishState("publishing");
    //     try {
    //         const payload = {
    //             contentMarkdown: postmortem.contentMarkdown,
    //             citations: postmortem.citations,
    //             inputEventSequenceMax: postmortem.inputEventSequenceMax,
    //             model: postmortem.model ?? null,
    //             generatedAtUtc: postmortem.generatedAtUtc,
    //             publishedBy: "", // Placeholder
    //         };
    //         await publishPostmortem(id, payload);
    //         setPublishState("published");
    //         const updatedIncident = await getIncidentDetail(id);
    //         setIncident(updatedIncident);
    //     } catch (err: unknown) {
    //         let message = "Publish failed. Please try again.";

    //         if (err instanceof ApiError) {
    //             // ApiError.body can be object | array | string | number | boolean | null
    //             const body = err.body;

    //             const errorCode =
    //                 body && typeof body === "object" && !Array.isArray(body)
    //                     ? (body as Record<string, unknown>)["error"]
    //                     : undefined;

    //             const serverMessage =
    //                 body && typeof body === "object" && !Array.isArray(body)
    //                     ? (body as Record<string, unknown>)["message"]
    //                     : undefined;

    //             if (err.status === 409 && errorCode === "concurrency_conflict") {
    //                 message =
    //                     typeof serverMessage === "string" && serverMessage.length > 0
    //                         ? serverMessage
    //                         : "Incident changed since this draft was generated. Please regenerate.";
    //                 }
    //             }

    //             setPostmortemError(message);
    //             setPublishState("idle");
    //         }
    // };

    const handleGeneratePostmortem = async () => {
        if(id) {
            setPostmortem(null);
            setPostmortemError(null);
            setPublishState("idle");
            setLoadingPostmortem(true);
            setSummary(null)
            try {
                const preview = await previewPostmortem(id);
                setPostmortem(preview);
            } catch {
                setPostmortemError("Failed to generate postmortem. Please try again.");
            } finally {
                setLoadingPostmortem(false);
            }
        }
    };

    const currentMaxSequence = Math.max(0, ...(incident?.events.map(e => e.sequence) || []));
    const isStale = postmortem != null && currentMaxSequence > postmortem.inputEventSequenceMax;

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

            {(loadingSummary || loadingPostmortem) && (
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
                            <ReactMarkdown>{summary.contentMarkdown}</ReactMarkdown>
                        </div>
                    </div>

                    {summary.citations.length > 0 && (
                        <div>
                            <p><strong>Citations:</strong></p>
                            <div>
                                {summary.citations.map((citation) => (
                                    <div key={citation.incidentEventId}>
                                        <p
                                            className="citation-link"
                                            onClick={() => scrollToEvent(citation.incidentEventId)}
                                        >
                                            <strong>[{citation.sequence}]</strong> -- {citation.reason && citation.reason}
                                        </p>
                                        {citation.quote && <p className="citation-quote"><strong>Quote:</strong> {citation.quote}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {summaryError && <p className="error-message">{summaryError}</p>}
                </div>
            )}

            {postmortem && (
                <div className="postmortem-container">
                    <h2>Postmortem</h2>
                    {postmortem.generatedAtUtc && (
                        <p>Generated At: {new Date(postmortem.generatedAtUtc).toLocaleString()}</p>
                    )}
                    {/* {publishState !== "published" && <p className="draft-marker">DRAFT (not published)</p>} */}
                    <div className="content-markdown">
                        <ReactMarkdown>{postmortem.contentMarkdown}</ReactMarkdown>
                    </div>
                    {postmortem.citations.length > 0 && (
                        <div>
                            <p><strong>Citations:</strong></p>
                            <div>
                                {postmortem.citations.map((citation) => (
                                    <div key={citation.incidentEventId}>
                                        <p
                                            className="citation-link"
                                            onClick={() => scrollToEvent(citation.incidentEventId)}
                                        >
                                            <strong>[{citation.sequence}]</strong> -- {citation.reason && citation.reason}
                                        </p>
                                        {citation.quote && <p className="citation-quote"><strong>Quote:</strong> {citation.quote}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {isStale && (
                        <div className="warning-banner">
                            Incident changed since this draft was generated. Regenerate before publishing.
                        </div>
                    )}
                    {postmortemError && <p className="error-message">{postmortemError}</p>}
                    {/* {publishState === "idle" && (
                        <button
                            onClick={handlePublishPostmortem}
                            disabled={isStale}
                        >
                            Publish Postmortem
                        </button>
                    )} */}
                    {publishState === "publishing" && <p>Publishing...</p>}
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