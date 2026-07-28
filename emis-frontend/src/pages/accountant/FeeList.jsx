import React, { useEffect, useState } from "react";
import { getAllFees, deleteFee } from "../../services/feeService";

function FeeList({ refresh }) {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    loadFees();
  }, [refresh]);

  const loadFees = () => {
    getAllFees()
      .then((response) => {
        setFees(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const removeFee = (id) => {
    deleteFee(id).then(() => {
      alert("Deleted");

      loadFees();
    });
  };

  return (
    <div>
      <h2>Fee Records</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Total Fee</th>
            <th>Paid</th>
            <th>Remaining</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {fees.map((fee) => (
            <tr key={fee.id}>
              <td>{fee.id}</td>

              <td>{fee.studentName}</td>

              <td>{fee.totalFee}</td>

              <td>{fee.paidAmount}</td>

              <td>{fee.remainingAmount}</td>

              <td>{fee.status}</td>

              <td>
                <button onClick={() => removeFee(fee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeList;
