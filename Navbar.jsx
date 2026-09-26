import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Edu<span>Manage</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/announcements">Announcements</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;