import {
  FaBook,
  FaUsers,
  FaClipboardCheck,
  FaChartBar,
} from "react-icons/fa";

export default function FacultyStats({ dashboard }) {

  const stats = [

    {
      title: "Subjects",
      value: dashboard.totalSubjects,
      icon: <FaBook />,
      color: "primary",
    },

    {
      title: "Students",
      value: dashboard.totalStudents,
      icon: <FaUsers />,
      color: "success",
    },

    {
      title: "Pending Attendance",
      value: dashboard.pendingAttendance,
      icon: <FaClipboardCheck />,
      color: "warning",
    },

    {
      title: "Pending Results",
      value: dashboard.pendingResults,
      icon: <FaChartBar />,
      color: "danger",
    },

  ];

  return (

    <div className="row">

      {stats.map((item, index) => (

        <div
          className="col-xl-3 col-md-6 mb-4"
          key={index}
        >

          <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body d-flex justify-content-between align-items-center">

              <div>

                <h6 className="text-muted mb-2">
                  {item.title}
                </h6>

                <h2 className="fw-bold mb-0">
                  {item.value}
                </h2>

              </div>

              <div
                className={`bg-${item.color} bg-opacity-10 rounded-circle p-3`}
              >

                <span
                  className={`text-${item.color} fs-3`}
                >
                  {item.icon}
                </span>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}