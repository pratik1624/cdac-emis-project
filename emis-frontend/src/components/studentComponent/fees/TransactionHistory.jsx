import {
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

export default function TransactionHistory() {

  const transactions = [

    {
      id: "TXN-1001",
      date: "12 Jul 2026",
      mode: "UPI",
      amount: 25000,
      status: "Success"
    },

    {
      id: "TXN-1002",
      date: "28 Jul 2026",
      mode: "Net Banking",
      amount: 15000,
      status: "Success"
    },

    {
      id: "TXN-1003",
      date: "05 Aug 2026",
      mode: "Credit Card",
      amount: 10000,
      status: "Pending"
    },

    {
      id: "TXN-1004",
      date: "18 Aug 2026",
      mode: "Debit Card",
      amount: 5000,
      status: "Success"
    }

  ];

  return (

    <div className="custom-card transaction-card">

      <div className="card-header-custom">

        <h4>

          Transaction History

        </h4>

        <p>

          Recent payment transactions

        </p>

      </div>

      <div className="transaction-list">

        <div className="transaction-list-header">

          <span>Transaction ID</span>

          <span>Date</span>

          <span>Mode</span>

          <span>Amount</span>

          <span>Status</span>

        </div>

        {

          transactions.map((transaction) => (

            <div
              key={transaction.id}
              className="transaction-item"
            >

              <div className="transaction-id">

                {transaction.id}

              </div>

              <div>

                {transaction.date}

              </div>

              <div>

                {transaction.mode}

              </div>

              <div>

                ₹{transaction.amount.toLocaleString()}

              </div>

              <div>

                {

                  transaction.status === "Success"

                  ?

                  <span className="status-badge success">

                    <FaCheckCircle />

                    Success

                  </span>

                  :

                  <span className="status-badge warning">

                    <FaClock />

                    Pending

                  </span>

                }

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}