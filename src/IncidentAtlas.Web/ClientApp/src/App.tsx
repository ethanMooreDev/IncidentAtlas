import { Routes, Route, Navigate } from 'react-router-dom';
import IncidentListPage from './pages/IncidentListPage';
import IncidentDetailPage from './pages/IncidentDetailPage';
import "./App.css";

function IndexReroute() {
  return <Navigate to="/incidents" replace />
}

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Incident Atlas</h1>
            </header>
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<IndexReroute />} />
                    <Route path="/incidents" element={<IncidentListPage />} />
                    <Route path="/incidents/:id" element={<IncidentDetailPage />} />
                </Routes>
            </main>
            <footer className="app-footer">
                <p>&copy; 2026 Incident Atlas</p>
            </footer>
        </div>
    );
}

export default App