import {
    FaAward,
    FaCheckCircle,
    FaStar
} from "react-icons/fa";

export default function RemarksCard() {

    return (

        <div className="card app-card remarks-card">

            <div className="card-body">

                <div className="remarks-header">

                    <FaAward className="remarks-icon" />

                    <div>

                        <h4 className="card-title mb-1">

                            Excellent Performance

                        </h4>

                        <p className="card-subtitle mb-0">

                            Congratulations! You have successfully passed all subjects.

                        </p>

                    </div>

                </div>

                <hr />

                <div className="remarks-list">

                    <div className="remarks-item">

                        <FaCheckCircle className="remarks-check" />

                        <span>

                            Overall Percentage : <strong>89%</strong>

                        </span>

                    </div>

                    <div className="remarks-item">

                        <FaCheckCircle className="remarks-check" />

                        <span>

                            Current CGPA : <strong>8.64</strong>

                        </span>

                    </div>

                    <div className="remarks-item">

                        <FaCheckCircle className="remarks-check" />

                        <span>

                            All subjects cleared successfully.

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