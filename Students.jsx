import { useMemo } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import StudentCard from "../components/StudentCard";
import { deleteStudent } from "../redux/studentSlice";

function Students() {
  const students = useSelector(
    (state) => state.students.students
  );

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [students, search]);

  const recordsPerPage = 4;

  const totalPages = Math.ceil(
    filteredStudents.length / recordsPerPage
  );

  const startIndex = (page - 1) * recordsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const handleSearch = (event) => {
    const value = event.target.value;

    setSearchParams({
      page: "1",
      search: value,
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="small-title">STUDENT MANAGEMENT</p>
          <h1>Students</h1>
        </div>

        <Link to="/students/add" className="primary-btn">
          + Add Student
        </Link>
      </div>

      <div className="student-toolbar">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={handleSearch}
        />

        <span>
          {filteredStudents.length} Students
        </span>
      </div>

      <Outlet />

      {currentStudents.length === 0 ? (
        <div className="empty-state">
          <h2>No Students Found</h2>
          <p>Try another search.</p>
        </div>
      ) : (
        <div className="students-grid">
          {currentStudents.map((student) => (
            <div key={student.id} className="student-wrapper">
              <StudentCard student={student} />

              <button
                className="delete-btn"
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          disabled={page <= 1}
          onClick={() =>
            setSearchParams({
              page: String(page - 1),
              search,
            })
          }
        >
          ← Previous
        </button>

        <span>
          Page {page} of {Math.max(totalPages, 1)}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() =>
            setSearchParams({
              page: String(page + 1),
              search,
            })
          }
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Students;