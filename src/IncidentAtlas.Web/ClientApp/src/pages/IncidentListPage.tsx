import { useEffect, useState } from "react";
import { getIncidents, createIncident } from "../api/incidentApi";
import type { IncidentSummaryDto } from "../types/incident";
import "./IncidentListPage.css";
import { useNavigate } from "react-router-dom";
import { IncidentSeverity, IncidentStatus, CreateIncidentRequest } from "../types/incident";
import { getEnumDisplayName } from "../utils/enumUtils";
import CreateIncidentModal from "../components/CreateIncidentModal";

function IncidentListPage() {
  const [incidents, setIncidents] = useState<Array<IncidentSummaryDto>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  console.log("Incidents: ", incidents);

  useEffect(() => {
    setLoading(true);
    setError("");

    (async () => {
      try {
        let results = await getIncidents();
        setIncidents(results);
      } catch (err) {
        setError("Failed to fetch incidents. Please try again later.");
        console.error("Error fetching incidents:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  console.debug("Processed incidents:", incidents);

  const handleCreateIncident = async (newIncident: CreateIncidentRequest) => {
    try {
      const newIncidentId = await createIncident(newIncident);
      navigate(`/incidents/${newIncidentId}`);
    } catch (err) {
      console.error("Error creating incident:", err);
    }
  };

  return (
    <div className="incident-list-page">
      <h1 className="page-title">Incident Management</h1>
      <button onClick={() => setIsModalOpen(true)}>Create New Incident</button>
      <CreateIncidentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateIncident}
      />
      {loading ? (
        <div className="loading-message">Loading incidents, please wait...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="incident-card-container">
          {incidents.map((incident) => (
            <div
              key={incident.incidentId}
              className="incident-card"
              onClick={() => navigate(`/incidents/${incident.incidentId}`)}
            >
              <h2>{incident.title}</h2>
              <p>
                <strong>Severity:</strong>{" "}
                {getEnumDisplayName(IncidentSeverity, incident.severity)}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {getEnumDisplayName(IncidentStatus, incident.status)}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(incident.createdAtUtc).toLocaleString(undefined, {
                  timeZone: "UTC",
                  timeZoneName: "short",
                })}
              </p>
              <p>
                <strong>Latest Event At:</strong>{" "}
                {new Date(incident.latestEventAtUtc).toLocaleString(undefined, {
                  timeZone: "UTC",
                  timeZoneName: "short",
                })}
              </p>
              <p>
                <strong>Event Count:</strong> {incident.eventCount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IncidentListPage;