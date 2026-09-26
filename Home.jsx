import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">SMART TUITION MANAGEMENT</p>

          <h1>
            Manage Your Tuition
            <span> Smarter & Easier</span>
          </h1>

          <p>
            EduManage helps tuition administrators manage students,
            faculty, announcements and academic activities from one
            simple platform.
          </p>

          <div className="hero-buttons">
            <Link to="/dashboard" className="primary-btn">
              Go to Dashboard
            </Link>

            <Link to="/students" className="secondary-btn">
              View Students
            </Link>
          </div>
        </div>

        <div className="hero-box">
          <div className="floating-card">
            <span>👨‍🎓</span>
            <div>
              <strong>Students</strong>
              <p>Manage easily</p>
            </div>
          </div>

          <div className="floating-card">
            <span>👩‍🏫</span>
            <div>
              <strong>Faculty</strong>
              <p>Track faculty</p>
            </div>
          </div>

          <div className="floating-card">
            <span>📢</span>
            <div>
              <strong>Updates</strong>
              <p>Stay informed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;