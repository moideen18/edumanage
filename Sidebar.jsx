import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>EduManage</h3>

      <NavLink to="/dashboard">📊 Dashboard</NavLink>
      <NavLink to="/students">👨‍🎓 Students</NavLink>
      <NavLink to="/faculty">👩‍🏫 Faculty</NavLink>
      <NavLink to="/announcements">📢 Announcements</NavLink>
      <NavLink to="/contact">📞 Contact</NavLink>
    </aside>
  );
}

export default Sidebar;