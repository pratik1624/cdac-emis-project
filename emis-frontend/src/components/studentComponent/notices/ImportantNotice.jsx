import {
    FaExclamationTriangle,
    FaCalendarAlt,
    FaArrowRight
} from "react-icons/fa";

export default function ImportantNotice({ notices }) {

    const importantNotice = notices.length > 0 ? notices[0] : null;

    if (!importantNotice) {

        return (
            <div className="card app-card important-notice-card">
                <div className="card-body">
                    <h5>No Important Notice</h5>
                </div>
            </div>
        );

    }

    return (

        <div className="card app-card important-notice-card">

            <div className="card-body">

                <div className="important-header">

                    <FaExclamationTriangle className="important-icon" />

                    <div>

                        <h5 className="mb-1">

                            Important Notice

                        </h5>

                        <small>

                            Latest Announcement

                        </small>

                    </div>

                </div>

                <hr />

                <h6>

                    {importantNotice.title}

                </h6>

                <div className="important-date">

                    <FaCalendarAlt />

                    <span>

                        {new Date(importantNotice.publishDate).toLocaleDateString(
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

                    {importantNotice.description}

                </p>

                <button className="btn btn-outline-primary w-100">

                    Read Full Notice

                    <FaArrowRight className="ms-2" />

                </button>

            </div>

        </div>

    );

}