import useFetchData from "../hooks/useFetchData";

function Faculty() {
  const {
    data,
    loading,
    error,
  } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="small-title">TEAM MANAGEMENT</p>
          <h1>Faculty</h1>
        </div>
      </div>

      {loading && (
        <div className="loading">
          Loading faculty...
        </div>
      )}

      {error && (
        <div className="form-error">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="faculty-grid">
          {data.slice(0, 6).map((faculty) => (
            <div className="faculty-card" key={faculty.id}>
              <div className="faculty-avatar">
                {faculty.name.charAt(0)}
              </div>

              <h3>{faculty.name}</h3>

              <p>{faculty.email}</p>

              <span>
                {faculty.company.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Faculty;