import {
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

export default function FeeDetailsTable() {

  const fees = [

    {
      type: "Tuition Fee",
      total: 50000,
      paid: 50000,
      due: 0,
      status: "Paid"
    },

    {
      type: "Examination Fee",
      total: 10000,
      paid: 5000,
      due: 5000,
      status: "Pending"
    },

    {
      type: "Library Fee",
      total: 5000,
      paid: 5000,
      due: 0,
      status: "Paid"
    },

    {
      type: "Development Fee",
      total: 10000,
      paid: 0,
      due: 10000,
      status: "Pending"
    }

  ];

  return (

    <div className="custom-card fee-table-card">

      <div className="card-header-custom">

        <h4>

          Fee Details

        </h4>

        <p>

          Semester fee breakdown

        </p>

      </div>

      <div className="fee-list">

        <div className="fee-list-header">

          <span>Fee Type</span>

          <span>Total</span>

          <span>Paid</span>

          <span>Due</span>

          <span>Status</span>

        </div>

        {

          fees.map((fee, index) => (

            <div
              key={index}
              className="fee-item"
            >

              <div className="fee-name">

                {fee.type}

              </div>

              <div>

                ₹{fee.total.toLocaleString()}

              </div>

              <div>

                ₹{fee.paid.toLocaleString()}

              </div>

              <div>

                ₹{fee.due.toLocaleString()}

              </div>

              <div>

                {

                  fee.status === "Paid"

                  ?

                  <span className="status-badge success">

                    <FaCheckCircle />

                    Paid

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