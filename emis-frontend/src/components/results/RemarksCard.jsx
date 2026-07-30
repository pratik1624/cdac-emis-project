import {
    FaAward,
    FaCheckCircle,
    FaStar
} from "react-icons/fa";

export default function RemarksCard({ results }) {

    const totalObtained = results.reduce(
        (sum, result) => sum + result.obtainedMarks,
        0
    );

    const totalMarks = results.reduce(
        (sum, result) => sum + result.totalMarks,
        0
    );

    const percentage =
        totalMarks > 0
            ? ((totalObtained * 100) / totalMarks).toFixed(1)
            : 0;

    const passedAll = results.every(
        result => result.grade !== "F"
    );

    const performance =
        percentage >= 75
            ? "Excellent Performance"
            : percentage >= 60
            ? "Good Performance"
            : "Needs Improvement";

    return (

        <div className="card app-card remarks-card">

            <div className="card-body">

                <div className="remarks-header">

                    <FaAward className="remarks-icon" />

                    <div>

                        <h4 className="card-title mb-1">

                            {performance}

                        </h4>

                        <p className="card-subtitle mb-0">

                            {
                                passedAll
                                    ? "Congratulations! You have successfully passed all subjects."
                                    : "Some subjects require improvement."
                            }

                        </p>

                    </div>

                </div>

                <hr />

                <div className="remarks-list">

                    <div className="remarks-item">

                        <FaCheckCircle className="remarks-check" />

                        <span>

                            Overall Percentage :
                            <strong> {percentage}%</strong>

                        </span>

                    </div>

                    <div className="remarks-item">

                        <FaCheckCircle className="remarks-check" />

                        <span>

                            Subjects Cleared :
                            <strong>
                                {" "}
                                {
                                    results.filter(r => r.grade !== "F").length
                                }
                                {" / "}
                                {results.length}
                            </strong>

                        </span>

                    </div>

                    <div className="remarks-item">

                        <FaCheckCircle className="remarks-check" />

                        <span>

                            {
                                passedAll
                                    ? "All subjects cleared successfully."
                                    : "Please clear the failed subjects."
                            }

                        </span>

                    </div>

                    <div className="remarks-item">

                        <FaStar className="remarks-star" />

                        <span>

                            Keep maintaining your academic performance.

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}