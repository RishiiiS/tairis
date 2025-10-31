import "./startpage.css";

function StartPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="hero-content">
          <h1 className="hero-title">Tairis</h1>
          <h2 className="hero-subtitle">Doctor-Free First Aid Decision Tree</h2>
          <p className="hero-desc">
            Quick, reliable first-aid guidance for everyone — anytime, anywhere.
          </p>
          <button className="start-btn" disabled>
            Get Started (Coming Soon)
          </button>
        </div>
      </header>

      <main className="landing-main">
        <section className="features">
          <h3>How Tairis Helps You</h3>
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon" role="img" aria-label="tree">
                🌳
              </span>
              <h4>Interactive Decision Tree</h4>
              <p>
                Answer simple questions and get step-by-step first-aid instructions tailored to your situation.
              </p>
            </div>

            <div className="feature-item">
              <span className="feature-icon" role="img" aria-label="speed">
                ⚡
              </span>
              <h4>Fast & Reliable</h4>
              <p>
                Designed for emergencies — instant help without waiting for medical professionals.
              </p>
            </div>

            <div className="feature-item">
              <span className="feature-icon" role="img" aria-label="easy">
                👍
              </span>
              <h4>User-Friendly</h4>
              <p>
                Simple, clear design anyone can use — no medical background required.
              </p>
            </div>
          </div>
        </section>

        <section className="about">
          <h3>About the Project</h3>
          <p>
            Tairis is built using <strong>React</strong>, <strong>Express.js</strong>,
            <strong> Prisma</strong>, and <strong>MySQL</strong>. It stores first-aid
            decision paths in a database, allowing real-time, interactive guidance
            during emergencies.
          </p>
        </section>
      </main>

      <footer className="landing-footer">
        <small>© 2025 Tairis — All rights reserved.</small>
      </footer>
    </div>
  );
}

export default StartPage;
