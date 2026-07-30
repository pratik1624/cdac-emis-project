export default function ResultTable({ results }) {

    const totalObtained = results.reduce(
        (sum, item) => sum + item.obtainedMarks,
        0
    );

    const totalMarks = results.reduce(
        (sum, item) => sum + item.totalMarks,
        0
    );

    const overallPercentage =
        totalMarks > 0
            ? ((totalObtained * 100) / totalMarks).toFixed(1)
            : 0;

    return (

        <div className="card app-card results-table-card mb-4">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h4 className="card-title mb-1">

                            Academic Results

                        </h4>

                        <p className="card-subtitle">

                            Overall Percentage <strong>{overallPercentage}%</strong>

                        </p>

                    </div>

                </div>

                <div className="table-responsive">

                    <table className="table align-middle results-table">

                        <thead>

                            <tr>

                                <th>Code</th>

                                <th>Subject</th>

                                <th>Credits</th>

                                <th>Grade</th>

                                <th>Marks</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {results.map((result, index) => (

                                <tr key={index}>

                                    <td>

                                        {result.subjectCode}

                                    </td>

                                    <td>

                                        {result.subjectName}

                                    </td>

                                    <td>

                                        4

                                    </td>

                                    <td>

                                        <span className="badge bg-primary">

                                            {result.grade}

                                        </span>

                                    </td>

                                    <td>

                                        {result.obtainedMarks} / {result.totalMarks}

                                    </td>

                                    <td>

                                        <span
                                            className={
                                                result.grade === "F"
                                                    ? "badge bg-danger"
                                                    : "badge bg-success"
                                            }
                                        >

                                            {result.grade === "F" ? "Fail" : "Pass"}

                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}