export default function ResultSummary({ results }) {

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    Academic Results

                </h5>

                <table className="table">

                    <thead>

                        <tr>

                            <th>Subject</th>

                            <th>Marks</th>

                            <th>Grade</th>

                        </tr>

                    </thead>

                    <tbody>

                        {results.map((item, index) => (

                            <tr key={index}>

                                <td>

                                    {item.subjectName}

                                </td>

                                <td>

                                    {item.obtainedMarks}/{item.totalMarks}

                                </td>

                                <td>

                                    {item.grade}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}