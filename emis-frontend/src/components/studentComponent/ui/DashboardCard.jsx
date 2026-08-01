export default function DashboardCard({

    title,

    value,

    icon,

    subtitle

}) {

    return (

        <div className="dashboard-card app-card">

            <div className="dashboard-icon">

                {icon}

            </div>

            <h2 className="dashboard-value">

                {value}

            </h2>

            <h6 className="dashboard-title">

                {title}

            </h6>

            <small className="dashboard-subtitle">

                {subtitle}

            </small>

        </div>

    );

}