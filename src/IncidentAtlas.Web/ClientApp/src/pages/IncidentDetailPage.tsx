import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './IncidentDetailPage.css';
import { getIncidentDetail, appendIncidentEvent } from '../api/incidentApi';
import type { IncidentDetailDto } from '../types/incident';
import { IncidentEventType, IncidentSeverity, IncidentStatus, AppendIncidentEventRequest } from '../types/incident';
import { getEnumDisplayName } from '../utils/enumUtils';
import AppendEventModal from '../components/AppendEventModal';

const IncidentDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [incident, setIncident] = useState<IncidentDetailDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <h2>Events</h2>
            <table className="incident-events-table">
                <thead>
                    <tr>
                        <th>Occurred At</th>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Created By</th>
                    </tr>
                </thead>
                <tbody>
                    {incident.events.map(event => (
                        <tr key={event.incidentEventId}>
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