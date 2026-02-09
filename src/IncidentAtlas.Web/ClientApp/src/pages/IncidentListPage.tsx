import { useEffect, useState } from "react"
import { getIncidents } from "../api/incidentApi"
import type { IncidentSummaryDto } from "../types/incident"
import "./IncidentListPage.css";
import { useNavigate } from 'react-router-dom';
import { IncidentSeverity, IncidentStatus } from '../types/incident';
import { getEnumDisplayName } from '../utils/enumUtils';

function IncidentListPage() {

    const [incidents, setIncidents] = useState<Array<IncidentSummaryDto>>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    console.log("Incidents: ", incidents)

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

    }, [])

    console.debug('Processed incidents:', incidents);

    return (
        <div className="incident-list-page">
            <h1 className="page-title">Incident Management</h1>
            {
                loading ? 
                <div className="loading-message">
                    Loading incidents, please wait...
                </div> :
                error ? 
                <div className="error-message">
                    {error}
                </div> :
                <div className="incident-card-container">
                    {
                        incidents.map(incident => (
                            <div key={incident.incidentId} className="incident-card" onClick={() => navigate(`/incidents/${incident.incidentId}`)}>
                                <h2>{incident.title}</h2>
                                <p><strong>Severity:</strong> {getEnumDisplayName(IncidentSeverity, incident.severity)}</p>
                                <p><strong>Status:</strong> {getEnumDisplayName(IncidentStatus, incident.status)}</p>
                                <p><strong>Created At:</strong> {new Date(incident.createdAtUtc).toLocaleString()}</p>
                                <p><strong>Latest Event At:</strong> {new Date(incident.latestEventAtUtc).toLocaleString()}</p>
                                <p><strong>Event Count:</strong> {incident.eventCount}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default IncidentListPage