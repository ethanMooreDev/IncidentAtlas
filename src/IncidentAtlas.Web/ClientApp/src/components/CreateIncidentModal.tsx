import React, { useState } from "react";
import "./CreateIncidentModal.css";
import { IncidentSeverity } from "../types/incident";
import type { CreateIncidentRequest } from "../types/incident";

interface CreateIncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (incidentData: CreateIncidentRequest) => void;
}

const CreateIncidentModal: React.FC<CreateIncidentModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState<CreateIncidentRequest>({
    title: "",
    severity: IncidentSeverity.Sev0,
    occurredAtUtc: new Date(), // Use UTC ISO string
    details: undefined,
    createdBy: undefined
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "severity" ? Number(value) as IncidentSeverity : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Create New Incident</h2>
        <p>Use the form below to create a new incident. Fields marked with * are required.</p>
        <form onSubmit={handleSubmit} className="create-incident-form">
          <fieldset>
            <legend>Incident Details</legend>
            <label htmlFor="title">* Title:
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter a title for the incident"
                required
              />
            </label>
            <label htmlFor="severity">* Severity:
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleInputChange}
                required
              >
                {Object.entries(IncidentSeverity).map(([key, value]) => (
                  <option key={value} value={value}>{key}</option>
                ))}
              </select>
            </label>
            <label htmlFor="occurredAtUtc">* Occurred At (UTC):
              <input
                id="occurredAtUtc"
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
                value={formData.details || ""}
                onChange={handleInputChange}
                placeholder="Provide additional details (optional)"
              />
            </label>
            <label htmlFor="createdBy">Created By:
              <input
                id="createdBy"
                type="text"
                name="createdBy"
                value={formData.createdBy || ""}
                onChange={handleInputChange}
                placeholder="Enter your name (optional)"
              />
            </label>
          </fieldset>
          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="create-button">
              Create Incident
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIncidentModal;