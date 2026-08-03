import MarksRow from "./MarksRow";

export default function SubjectMarksTable({

    marks,

    setMarks

}) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <table className="table table-hover">

                    <thead>

                        <tr>

                            <th>Roll No.</th>

                            <th>Name</th>

                            <th>Obtained</th>

                            <th>Total</th>

                            <th>Grade</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            marks.map((student,index)=>(

                                <MarksRow

                                    key={student.studentId}

                                    index={index}

                                    student={student}

                                    marks={marks}

                                    setMarks={setMarks}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}