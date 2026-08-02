import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

export default function PendingResults() {

    const pendingResults = [

        {
            subject: "Java Programming",
            semester: "Semester 6"
        },

        {
            subject: "Database Management",
            semester: "Semester 5"
        }

    ];

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h5 className="fw-bold mb-0">

                        Pending Results

                    </h5>

                    <FaGraduationCap
                        className="text-success fs-4"
                    />

                </div>

                {pendingResults.map((item, index) => (

                    <div
                        key={index}
                        className="border rounded-3 p-3 mb-3"
                    >

                        <h6 className="fw-semibold mb-1">

                            {item.subject}

                        </h6>

                        <small className="text-muted">

                            {item.semester}

                        </small>

                    </div>

                ))}

                <Link
                    to="/faculty/subjects"
                    className="btn btn-success w-100 mt-2"
                >

                    Upload Marks

                </Link>

            </div>

        </div>

    );

}