import {
    FaBookOpen,
    FaCheckCircle,
    FaTimesCircle,
    FaPercentage
} from "react-icons/fa";

export default function ResultSummary({ results }) {

    const totalSubjects = results.length;

    const passedSubjects = results.filter(
        result => result.grade !== "F"
    ).length;

    const failedSubjects = totalSubjects - passedSubjects;

    const creditsEarned = passedSubjects * 4;

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

    return (

        <div className="attendance-overview">

            <h4 className="attendance-card-title">

                Result Summary

            </h4>

            <div className="result-summary-list">

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaBookOpen className="summary-icon" />

                        <span>Total Subjects</span>

                    </div>

                    <strong>{totalSubjects}</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaCheckCircle className="summary-icon text-success" />

                        <span>Passed</span>

                    </div>

                    <strong>{passedSubjects}</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaTimesCircle className="summary-icon text-danger" />

                        <span>Failed</span>

                    </div>

                    <strong>{failedSubjects}</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaBookOpen className="summary-icon" />

                        <span>Credits Earned</span>

                    </div>

                    <strong>{creditsEarned}</strong>

                </div>

                <div className="result-summary-item">

                    <div className="result-summary-left">

                        <FaPercentage className="summary-icon" />

                        <span>Percentage</span>

                    </div>

                    <strong>{percentage}%</strong>

                </div>

            </div>

        </div>

    );

}