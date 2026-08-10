import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";

export default function RecentNotices({ notices }) {
  if (!notices || notices.length === 0) {
    return (
      <div className="app-card recent-notices-card">
        <h4 className="card-title">Recent Notices</h4>

        <p className="text-secondary">No notices available.</p>
      </div>
    );
  }

  return (
    <div className="app-card recent-notices-card">
      <h4 className="card-title">Recent Notices</h4>

      <div className="notice-list">
        {notices.map((notice, index) => (
          <div key={index} className="notice-item">
            <div className="notice-title">
              <FaBullhorn className="me-2 text-success" />

              {notice.title}
            </div>

            <p className="notice-description">{notice.description}</p>

            <small className="text-secondary">
              <FaCalendarAlt className="me-2" />

              {new Date(notice.publishDate).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
