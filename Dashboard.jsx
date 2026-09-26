import { useSelector } from "react-redux";
import StatCard from "../components/StatCard";

function Dashboard() {
  const students = useSelector(
    (state) => state.students.students
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="small-title">OVERVIEW</p>
          <h1>Dashboard</h1>
        </div>

        <span className="welcome">Welcome back 👋</span>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Students"
          value={students.length}
          icon="👨‍🎓"
        />

        <StatCard
          title="Faculty Members"
          value="08"
          icon="👩‍🏫"
        />

        <StatCard
          title="Active Classes"
          value="12"
          icon="📚"
        />

        <StatCard
          title="Announcements"
          value="05"
          icon="📢"
        />
      </div>

      <div className="dashboard-content">
        <div className="dashboard-panel">
          <h2>About EduManage</h2>

          <p>
            EduManage is a frontend tuition management application
            designed to organize student information, faculty details,
            announcements and academic activities.
          </p>

          <p>
            The application demonstrates React concepts including
            Redux Toolkit, Context API, Custom Hooks, API integration,
            routing and CRUD operations.
          </p>
        </div>

        <div className="dashboard-panel">
          <h2>Quick Information</h2>

          <div className="info-row">
            <span>Students</span>
            <strong>{students.length}</strong>
          </div>

          <div className="info-row">
            <span>Faculty</span>
            <strong>08</strong>
          </div>

          <div className="info-row">
            <span>Classes</span>
            <strong>12</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;