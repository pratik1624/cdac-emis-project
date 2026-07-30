export default function ResultTable({ semester }) {

    const results = [

        {
            code: "CST601",
            subject: "Advanced Java",
            credits: 4,
            grade: "A+",
            points: 10,
            status: "Pass"
        },

        {
            code: "CST602",
            subject: "Web Programming Technologies",
            credits: 4,
            grade: "A",
            points: 9,
            status: "Pass"
        },

        {
            code: "CST603",
            subject: "Database Technologies",
            credits: 4,
            grade: "A+",
            points: 10,
            status: "Pass"
        },

        {
            code: "CST604",
            subject: "Operating Systems",
            credits: 4,
            grade: "B+",
            points: 8,
            status: "Pass"
        },

        {
            code: "CST605",
            subject: "Computer Networks",
            credits: 4,
            grade: "A",
            points: 9,
            status: "Pass"
        },

        {
            code: "CST606",
            subject: "Software Engineering",
            credits: 4,
            grade: "A+",
            points: 10,
            status: "Pass"
        }

    ];

    return (

       <div className="card app-card results-table-card mb-4">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h4 className="card-title mb-1">

                            Academic Results

                        </h4>

                        <p className="card-subtitle">

                            Semester 6 • Overall Percentage 89%

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

                                <th>Points</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {results.map((result, index) => (

                                <tr key={index}>

                                    <td>

                                        {result.code}

                                    </td>

                                    <td>

                                        {result.subject}

                                    </td>

                                    <td>

                                        {result.credits}

                                    </td>

                                    <td>

                                        <span className="badge bg-primary">

                                            {result.grade}

                                        </span>

                                    </td>

                                    <td>

                                        {result.points}

                                    </td>

                                    <td>

                                        <span className="badge bg-success">

                                            {result.status}

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