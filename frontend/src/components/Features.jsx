import { Link } from "react-router-dom";
import "./styles/features.css";

function Features() {
  const featuresList = [
    {
      id: 1,
      title: "Instant First-Aid Guidance",
      description: "Get immediate, reliable first-aid guidance for common emergencies",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Interactive Question Flow",
      description: "Question-based flow that adapts to your responses for personalized guidance",
      icon: "❓"
    },
    {
      id: 3,
      title: "Step-by-Step Instructions",
      description: "Clear, easy-to-follow instructions that guide you through each action",
      icon: "📋"
    },
    {
      id: 4,
      title: "Multiple Emergency Categories",
      description: "Coverage for cuts, burns, choking, fractures, and many more emergencies",
      icon: "🏥"
    },
    {
      id: 5,
      title: "Fast & User-Friendly",
      description: "Intuitive interface designed for quick access during emergencies",
      icon: "⚙️"
    },
    {
      id: 6,
      title: "Safety-Focused Suggestions",
      description: "Includes actions to take and critical actions to avoid",
      icon: "🛡️"
    },
    {
      id: 7,
      title: "Restart Anytime",
      description: "Option to restart the guidance at any point in the process",
      icon: "🔄"
    },
    {
      id: 8,
      title: "Fully Responsive Design",
      description: "Works smoothly across all devices - desktop, tablet, and mobile",
      icon: "📱"
    },
    {
      id: 9,
      title: "Emergency Contacts",
      description: "Quick access to essential emergency contact information",
      icon: "☎️"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Tairis</h2>
          <p>Everything you need for medical emergencies</p>
          <Link to="/get-started" className="header-btn">Get Started</Link>
        </div>

        <div className="features-grid">
          {featuresList.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
