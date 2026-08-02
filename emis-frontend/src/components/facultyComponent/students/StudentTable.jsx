import StudentRow from "./StudentRow";

export default function StudentTable({ students }) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <table className="table table-hover align-middle">

                    <thead>

                        <tr>

                            <th>Roll No.</th>

                            <th>Name</th>

                            <th>Semester</th>

                            <th>Email</th>

                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            students.map(student=>(

                                <StudentRow

                                    key={student.rollNumber}

                                    student={student}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}