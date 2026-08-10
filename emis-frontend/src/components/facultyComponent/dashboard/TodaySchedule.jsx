import {
    FaClock,
    FaBookOpen,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function TodaySchedule() {

    const schedule = [

        {
            time: "09:00 AM",
            subject: "Java Programming",
            room: "Lab 301"
        },

        {
            time: "11:00 AM",
            subject: "Database Systems",
            room: "Room 204"
        },

        {
            time: "02:00 PM",
            subject: "Web Technology",
            room: "Lab 105"
        },

        {
            time: "04:00 PM",
            subject: "Software Engineering",
            room: "Room 210"
        }

    ];

    return (

        <div className="dashboard-card-section">

            <div className="dashboard-section-header">

                <h4>

                    Today's Schedule

                </h4>

                <p>

                    Your lectures for today

                </p>

            </div>

            <div className="schedule-list">

                {

                    schedule.map((lecture, index) => (

                        <div
                            key={index}
                            className="schedule-item"
                        >

                            <div className="schedule-time">

                                <FaClock />

                                <span>

                                    {lecture.time}

                                </span>

                            </div>

                            <div className="schedule-details">

                                <h6>

                                    <FaBookOpen className="me-2" />

                                    {lecture.subject}

                                </h6>

                                <p>

                                    <FaMapMarkerAlt className="me-2" />

                                    {lecture.room}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}