import {
    FaUniversity,
    FaCreditCard,
    FaMobileAlt
} from "react-icons/fa";

export default function TransactionHistory() {

    const transactions = [

        {
            receipt: "RCP1001",
            date: "15 Jul 2026",
            amount: "₹60,000",
            mode: "UPI"
        },

        {
            receipt: "RCP1002",
            date: "15 Jul 2026",
            amount: "₹5,000",
            mode: "Debit Card"
        },

        {
            receipt: "RCP1003",
            date: "15 Jul 2026",
            amount: "₹25,000",
            mode: "Net Banking"
        }

    ];

    return (

        <div className="card app-card transaction-table-card mb-4">

            <div className="card-body">

                <div className="mb-4">

                    <h4 className="card-title mb-1">

                        Transaction History

                    </h4>

                    <p className="card-subtitle">

                        Record of all successful fee payments.

                    </p>

                </div>

                <div className="table-responsive">

                    <table className="table fees-table align-middle">

                        <thead>

                            <tr>

                                <th>Receipt No.</th>

                                <th>Date</th>

                                <th>Amount</th>

                                <th>Payment Mode</th>

                            </tr>

                        </thead>

                        <tbody>

                            {transactions.map((item, index) => (

                                <tr key={index}>

                                    <td>

                                        {item.receipt}

                                    </td>

                                    <td>

                                        {item.date}

                                    </td>

                                    <td>

                                        {item.amount}

                                    </td>

                                    <td>

                                        {item.mode === "UPI" && (

                                            <>
                                                <FaMobileAlt className="me-2 text-success" />
                                                UPI
                                            </>

                                        )}

                                        {item.mode === "Debit Card" && (

                                            <>
                                                <FaCreditCard className="me-2 text-primary" />
                                                Debit Card
                                            </>

                                        )}

                                        {item.mode === "Net Banking" && (

                                            <>
                                                <FaUniversity className="me-2 text-warning" />
                                                Net Banking
                                            </>

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