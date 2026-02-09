import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './IncidentDetailPage.css';
import { getIncidentDetail, appendIncidentEvent } from '../api/incidentApi';
import type { IncidentDetailDto } from '../types/incident';
import { IncidentEventType, IncidentSeverity, IncidentStatus } from '../types/incident';
import { getEnumDisplayName } from '../utils/enumUtils';

const IncidentDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [incident, setIncident] = useState<IncidentDetailDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        type: IncidentEventType.IncidentDeclared,
        occurredAt: new Date().toISOString(),
        details: '',
        createdBy: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchIncident = async () => {
            try {
                if (id) {
                    const data = await getIncidentDetail<IncidentDetailDto>(id);
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'type' ? Number(value) as IncidentEventType : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError(null);

        try {
            if (id) {
                await appendIncidentEvent(id, formData);
                const updatedIncident = await getIncidentDetail<IncidentDetailDto>(id);
                setIncident(updatedIncident);
                setFormData({
                    title: '',
                    type: IncidentEventType.IncidentDeclared,
                    occurredAt: new Date().toISOString(),
                    details: '',
                    createdBy: ''
                });
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
                <p><strong>Type:</strong> {getEnumDisplayName(IncidentEventType, incident.events[0]?.type)}</p>
                <p><strong>Severity:</strong> {getEnumDisplayName(IncidentSeverity, incident.severity)}</p>
                <p><strong>Status:</strong> {getEnumDisplayName(IncidentStatus, incident.status)}</p>
                <p><strong>Created At:</strong> {new Date(incident.createdAtUtc).toLocaleString()}</p>
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
                            <td>{new Date(event.occurredAtUtc).toLocaleString()}</td>
                            <td>{getEnumDisplayName(IncidentEventType, event.type)}</td>
                            <td>{event.title}</td>
                            <td>{event.details || 'N/A'}</td>
                            <td>{event.createdBy || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <h2>Append Event</h2>
                        <p>Use the form below to add a new event to this incident. Fields marked with * are required.</p>
                        <form onSubmit={handleSubmit} className="append-event-form">
                            <fieldset>
                                <legend>Event Details</legend>
                                <label htmlFor="title">* Title:
                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter a brief title for the event"
                                        required
                                    />
                                </label>
                                <label htmlFor="type">* Type:
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        title="Select the type of incident event"
                                        required
                                    >
                                        {Object.entries(IncidentEventType).map(([key, value]) => (
                                            <option key={value} value={value}>{key}</option>
                                        ))}
                                    </select>
                                </label>
                                <label htmlFor="occurredAt">* Occurred At:
                                    <input
                                        id="occurredAt"
                                        type="datetime-local"
                                        name="occurredAt"
                                        value={formData.occurredAt}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </fieldset>
                            <fieldset>
                                <legend>Additional Information</legend>
                                <label htmlFor="details">Details:
                                    <textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        placeholder="Provide additional details (optional)"
                                    />
                                </label>
                                <label htmlFor="createdBy">Created By:
                                    <input
                                        id="createdBy"
                                        type="text"
                                        name="createdBy"
                                        value={formData.createdBy}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name (optional)"
                                    />
                                </label>
                            </fieldset>
                            <div className="modal-buttons">
                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="add-button"
                                >
                                    Add Event
                                </button>
                            </div>
                        </form>
                        {formError && (
                            <div className="form-error">
                                <p>{formError}</p>
                                <button onClick={handleSubmit}>Retry</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IncidentDetailPage;