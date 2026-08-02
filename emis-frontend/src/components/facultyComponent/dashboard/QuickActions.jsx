import { Link } from "react-router-dom";

export default function QuickActions() {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    Quick Actions

                </h5>

                <div className="row g-3">

                    <div className="col-md-3">

                        <Link
                            to="/faculty/attendance"
                            className="btn btn-primary w-100"
                        >

                            Mark Attendance

                        </Link>

                    </div>

                    <div className="col-md-3">

                        <Link
                            to="/faculty/subjects"
                            className="btn btn-success w-100"
                        >

                            Upload Marks

                        </Link>

                    </div>

                    <div className="col-md-3">

                        <Link
                            to="/faculty/students"
                            className="btn btn-info w-100"
                        >

                            Students

                        </Link>

                    </div>

                    <div className="col-md-3">

                        <Link
                            to="/faculty/notices"
                            className="btn btn-warning w-100"
                        >

                            Notices

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}