import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function StudentDetails() {
  const { id } = useParams();

  const students = useSelector(
    (state) => state.students.students
  );

  const student = students.find(
    (item) => item.id.toString() === id
  );

  if (!student) {
    return (
      <div className="page empty-state">
        <h2>Student Not Found</h2>
        <Link to="/students" className="primary-btn">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <div className="details-avatar">
          {student.name.charAt(0)}
        </div>

        <div className="details-content">
          <p className="small-title">STUDENT PROFILE</p>

          <h1>{student.name}</h1>

          <div className="details-grid">
            <div>
              <span>Email</span>
              <strong>{student.email}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{student.phone}</strong>
            </div>

            <div>
              <span>City</span>
              <strong>{student.city}</strong>
            </div>

            <div>
              <span>Grade</span>
              <strong>{student.grade}</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>{student.role}</strong>
            </div>
          </div>

          <Link to="/students" className="secondary-btn">
            ← Back to Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;