export default function FeeDetailsTable() {

    const fees = [

        {
            type: "Tuition Fee",
            amount: "₹60,000",
            dueDate: "15 Jul 2026",
            status: "Paid"
        },

        {
            type: "Examination Fee",
            amount: "₹5,000",
            dueDate: "15 Jul 2026",
            status: "Paid"
        },

        {
            type: "Library Fee",
            amount: "₹2,500",
            dueDate: "15 Jul 2026",
            status: "Paid"
        },

        {
            type: "Laboratory Fee",
            amount: "₹12,500",
            dueDate: "15 Aug 2026",
            status: "Pending"
        },

        {
            type: "Development Fee",
            amount: "₹20,000",
            dueDate: "15 Aug 2026",
            status: "Pending"
        },

        {
            type: "Miscellaneous Fee",
            amount: "₹20,000",
            dueDate: "15 Aug 2026",
            status: "Pending"
        }

    ];

    return (

        <div className="card app-card fee-table-card mb-4">

            <div className="card-body">

                <div className="mb-4">

                    <h4 className="card-title mb-1">

                        Fee Details

                    </h4>

                    <p className="card-subtitle">

                        Complete breakdown of your academic fees.

                    </p>

                </div>

                <div className="table-responsive">

                    <table className="table fees-table align-middle">

                        <thead>

                            <tr>

                                <th>#</th>

                                <th>Fee Type</th>

                                <th>Amount</th>

                                <th>Due Date</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {fees.map((fee, index) => (

                                <tr key={index}>

                                    <td>{index + 1}</td>

                                    <td>{fee.type}</td>

                                    <td>{fee.amount}</td>

                                    <td>{fee.dueDate}</td>

                                    <td>

                                        {fee.status === "Paid" ? (

                                            <span className="badge bg-success">

                                                Paid

                                            </span>

                                        ) : (

                                            <span className="badge bg-warning text-dark">

                                                Pending

                                            </span>

                                        )}

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