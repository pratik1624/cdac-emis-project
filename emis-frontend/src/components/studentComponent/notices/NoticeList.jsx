import {
    FaBullhorn,
    FaCalendarAlt,
    FaArrowRight
} from "react-icons/fa";

export default function NoticeList({ notices }) {

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

                    notices.map((notice) => (

                        <div
                            key={notice.noticeId}
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

                                        Notice

                                    </span>

                                </div>

                                <div className="notice-date">

                                    <FaCalendarAlt />

                                    <span>

                                        {new Date(notice.publishDate).toLocaleDateString(
                                            "en-GB",
                                            {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            }
                                        )}

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