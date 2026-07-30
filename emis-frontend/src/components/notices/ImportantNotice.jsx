import {
    FaExclamationTriangle,
    FaCalendarAlt,
    FaArrowRight
} from "react-icons/fa";

export default function ImportantNotice() {

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

                            High Priority

                        </small>

                    </div>

                </div>

                <hr />

                <h6>

                    Fee Payment Deadline Extended

                </h6>

                <div className="important-date">

                    <FaCalendarAlt />

                    <span>

                        20 Aug 2026

                    </span>

                </div>

                <p>

                    The last date for fee payment has been extended till
                    <strong> 20 August 2026.</strong>
                    Students are requested to complete the payment before the deadline.

                </p>

                <button className="btn btn-outline-primary w-100">

                    Read Full Notice

                    <FaArrowRight className="ms-2" />

                </button>

            </div>

        </div>

    );

}