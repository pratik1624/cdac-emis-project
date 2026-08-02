export default function TodaysClasses() {

    const classes = [

        {
            subject: "Java Programming",
            time: "09:00 AM - 10:00 AM",
            semester: "Semester 6"
        },

        {
            subject: "Database Management",
            time: "11:00 AM - 12:00 PM",
            semester: "Semester 6"
        },

        {
            subject: "Software Engineering",
            time: "02:00 PM - 03:00 PM",
            semester: "Semester 5"
        }

    ];

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    Today's Classes

                </h5>

                {classes.map((item, index) => (

                    <div
                        key={index}
                        className="d-flex justify-content-between align-items-center border-bottom py-3"
                    >

                        <div>

                            <h6 className="fw-semibold mb-1">

                                {item.subject}

                            </h6>

                            <small className="text-muted">

                                {item.semester}

                            </small>

                        </div>

                        <span className="badge bg-primary">

                            {item.time}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}