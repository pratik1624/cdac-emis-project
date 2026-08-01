import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export default function AttendanceInsights() {

    return (

        <div className="row mt-4">

            <div className="col-lg-6 mb-4">

                <div className="attendance-table-card h-100">

                    <h4 className="mb-4">
                        Attendance Overview
                    </h4>

                    <h1 className="text-success fw-bold">
                        92%
                    </h1>

                    <p className="text-light mb-2">
                        Excellent Attendance
                    </p>

                    <small className="text-secondary">
                        Keep maintaining above 90% attendance for better academic performance.
                    </small>

                </div>

            </div>

            <div className="col-lg-6 mb-4">

                <div className="attendance-table-card h-100">

                    <h4 className="mb-4">
                        Attendance Policy
                    </h4>

                    <p>
                        <FaCheckCircle className="text-success me-2" />
                        Minimum Required : <strong>75%</strong>
                    </p>

                    <p>
                        <FaCheckCircle className="text-success me-2" />
                        Current Attendance : <strong>92%</strong>
                    </p>

                    <p>
                        <FaInfoCircle className="text-warning me-2" />
                        Eligible to appear in examinations.
                    </p>

                </div>

            </div>

        </div>

    );

}