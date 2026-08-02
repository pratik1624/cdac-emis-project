export default function RecentNotices() {

    const notices = [

        {
            title: "Semester Examination Schedule Released",
            date: "02 Aug 2026"
        },

        {
            title: "Faculty Meeting Tomorrow at 11:00 AM",
            date: "01 Aug 2026"
        },

        {
            title: "Internal Marks Submission Deadline",
            date: "30 Jul 2026"
        }

    ];

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    Recent Notices

                </h5>

                {notices.map((notice, index) => (

                    <div
                        key={index}
                        className="border-bottom py-3"
                    >

                        <h6 className="fw-semibold mb-1">

                            {notice.title}

                        </h6>

                        <small className="text-muted">

                            {notice.date}

                        </small>

                    </div>

                ))}

            </div>

        </div>

    );

}