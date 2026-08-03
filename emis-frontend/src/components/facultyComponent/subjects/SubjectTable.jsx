import SubjectRow from "./SubjectRow";

export default function SubjectTable({ subjects }) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <table className="table table-hover align-middle">

                    <thead>

                        <tr>

                            <th>Subject Code</th>

                            <th>Subject Name</th>

                            <th>Semester</th>

                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            subjects.map((subject,index)=>(

                                <SubjectRow

                                    key={index}

                                    subject={subject}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}