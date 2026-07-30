import {
    FaCalendarAlt,
    FaUniversity,
    FaClipboardList,
    FaClock
} from "react-icons/fa";

export default function SemesterInfo({ semester }) {

    return (

        <div className="attendance-policy">

            <h4 className="attendance-card-title">

                Semester Information

            </h4>

            <div className="result-summary-list">

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaUniversity className="summary-icon" />

                        <span>Semester</span>

                    </div>

                    <strong>Semester 6</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaCalendarAlt className="summary-icon" />

                        <span>Academic Year</span>

                    </div>

                    <strong>2026 - 2027</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaClipboardList className="summary-icon" />

                        <span>Exam</span>

                    </div>

                    <strong>End Semester</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaClock className="summary-icon" />

                        <span>Declared On</span>

                    </div>

                    <strong>20 Jul 2026</strong>

                </div>

            </div>

        </div>

    );

}