import {
    FaBullhorn,
    FaGraduationCap,
    FaCalendarAlt,
    FaArrowRight
} from "react-icons/fa";

export default function NoticeList() {

    const notices = [

        {
            title: "Mid Semester Examination",
            date: "15 Aug 2026",
            category: "Academic",
            description: "Mid semester examinations will begin from next week. Students are advised to check the timetable and prepare accordingly."
        },

        {
            title: "Assignment Submission",
            date: "18 Aug 2026",
            category: "Assignment",
            description: "Submit your Java and Web Programming assignments before Friday to avoid late submission penalties."
        },

        {
            title: "Independence Day Celebration",
            date: "15 Aug 2026",
            category: "Event",
            description: "Students are invited to participate in the Independence Day celebration organized by the college."
        },

        {
            title: "Library Notice",
            date: "20 Aug 2026",
            category: "Library",
            description: "Library timings have been extended during examination week for all students."
        }

    ];

    return (

       <div className="app-card notice-list-card">
    <div className="app-card-body">

                <div className="mb-4">

                    <h4 className="card-title mb-1">

                        Latest Notices

                    </h4>

                    <p className="card-subtitle">

                        Recent announcements from your college.

                    </p>

                </div>

                {

                    notices.map((notice, index) => (

                        <div
                            key={index}
                            className="notice-item"
                        >

                            <div className="notice-icon">

                                <FaBullhorn />

                            </div>

                            <div className="notice-body">

                                <div className="notice-top">

                                    <h5>

                                        {notice.title}

                                    </h5>

                                    <span className="badge bg-primary">

                                        {notice.category}

                                    </span>

                                </div>

                                <div className="notice-date">

                                    <FaCalendarAlt />

                                    <span>

                                        {notice.date}

                                    </span>

                                </div>

                                <p>

                                    {notice.description}

                                </p>

                                <button
                                    className="btn btn-link notice-link p-0"
                                >

                                    Read More

                                    <FaArrowRight className="ms-2" />

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}