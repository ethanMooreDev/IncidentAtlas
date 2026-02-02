import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [serverHealth, setServerHealth] = useState("")

  useEffect(() => {
    async function fetchServerHealth() {
      await fetch("/api/health")
        .then(response => {
          if (!response.ok) {
            // Handle non-successful HTTP statuses (e.g., 404, 500)
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(jsonData => {

          setServerHealth(JSON.stringify(jsonData, null, 2))
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    fetchServerHealth()

  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        
      </div>
      <div className="card">
        <div>
          Server Status
        </div>
        <p>
          {serverHealth}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
