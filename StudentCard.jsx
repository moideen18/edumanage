import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {student.name.charAt(0)}
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p>{student.email}</p>
        <p>{student.city}</p>
        <span>{student.grade}th Grade</span>
      </div>

      <Link
        to={`/students/${student.id}`}
        className="view-btn"
      >
        View
      </Link>
    </div>
  );
}

export default StudentCard;