function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Monthly Test",
      text: "Monthly assessment will be conducted this Saturday.",
      date: "24 Sep 2026",
    },
    {
      id: 2,
      title: "Parent Meeting",
      text: "Parent interaction session will be conducted next week.",
      date: "27 Sep 2026",
    },
    {
      id: 3,
      title: "New Batch",
      text: "New tuition batch registration is now available.",
      date: "30 Sep 2026",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="small-title">LATEST UPDATES</p>
          <h1>Announcements</h1>
        </div>
      </div>

      <div className="announcement-list">
        {announcements.map((item) => (
          <div className="announcement-card" key={item.id}>
            <div className="announcement-icon">
              📢
            </div>

            <div>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;