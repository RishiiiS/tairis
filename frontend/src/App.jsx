import './App.css'

function App() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Tairis — Doctor-Free First Aid Decision Tree</h1>
        <p className="subtitle">Your guide to quick, reliable first-aid help</p>
      </header>
      <main className="landing-main">
        <section className="description">
          <p>
            Tairis is a web-based system designed to guide users through basic first-aid steps in emergency situations, without needing a doctor immediately. Answer simple questions and get the right first-aid action based on your responses.
          </p>
          <ul>
            <li>Interactive decision-tree for emergencies</li>
            <li>Step-by-step guidance for first-aid</li>
            <li>User-friendly and fast</li>
          </ul>
        </section>
        <section className="cta">
          <button className="start-btn" disabled>Get Started (Coming Soon)</button>
        </section>
      </main>
      <footer className="landing-footer">
        <small>Built with React, Express.js, Prisma &amp; MySQL</small>
      </footer>
    </div>
  );
}

export default App
