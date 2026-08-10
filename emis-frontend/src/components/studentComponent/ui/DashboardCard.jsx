export default function DashboardCard({
  title,

  value,

  icon,

  subtitle,
}) {
  return (
    <div className="dashboard-card app-card">
      <div className="dashboard-card-top">
        <div className="dashboard-icon">{icon}</div>
      </div>

      <div className="dashboard-card-body">
        <h2 className="dashboard-value">{value}</h2>

        <h6 className="dashboard-title">{title}</h6>

        <p className="dashboard-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
