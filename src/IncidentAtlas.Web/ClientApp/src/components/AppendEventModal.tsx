import React, { useState } from 'react';
import './AppendEventModal.css';
import { IncidentEventType, AppendIncidentEventRequest } from '../types/incident';

interface AppendEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: AppendIncidentEventRequest) => Promise<void>;
    formError: string | null;
}

const AppendEventModal: React.FC<AppendEventModalProps> = ({ isOpen, onClose, onSubmit, formError }) => {
    const [formData, setFormData] = useState<AppendIncidentEventRequest>({
        title: '',
        type: IncidentEventType.NoteAdded,
        occurredAtUtc: new Date(),
        details: undefined,
        createdBy: undefined
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'type' 
                ? Number(value) as IncidentEventType 
                : name === 'occurredAtUtc' 
                ? new Date(value)
                : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Append Event</h2>
                <form onSubmit={handleSubmit} className="append-event-form">
                    <fieldset>
                        <legend>Event Details</legend>
                        <label htmlFor="title">Title:
                            <input
                                id="title"
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label htmlFor="type">Type:
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleInputChange}
                                required
                            >
                                {Object.entries(IncidentEventType).map(([key, value]) => (
                                    key !== 'IncidentDeclared' && (
                                        <option key={value} value={value}>{key}</option>
                                    )
                                ))}
                            </select>
                        </label>
                        <label htmlFor="occurredAt">Occurred At:
                            <input
                                id="occurredAt"
                                type="datetime-local"
                                name="occurredAtUtc"
                                value={formData.occurredAtUtc.toISOString().slice(0, 16)}
                                onChange={handleInputChange}
                                required
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
                                required
                            />
                        </label>
                        <label htmlFor="createdBy">Created By:
                            <input
                                id="createdBy"
                                type="text"
                                name="createdBy"
                                value={formData.createdBy}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </fieldset>
                    <div className="modal-buttons">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Add Event</button>
                    </div>
                </form>
                {formError && <div className="form-error">{formError}</div>}
            </div>
        </div>
    );
};

export default AppendEventModal;