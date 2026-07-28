import React, { useState } from "react";
import { addFee } from "../../services/feeService";

function AddFee({ setRefresh }) {
  const [fee, setFee] = useState({
    studentId: "",
    totalFee: "",
    paidAmount: "",
    paymentDate: "",
  });

  const handleChange = (e) => {
    setFee({
      ...fee,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addFee(fee)
      .then(() => {
        alert("Fee Added Successfully");

        setRefresh((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add Fee</h2>

      <form onSubmit={submitHandler}>
        <input
          name="studentId"
          placeholder="Student ID"
          onChange={handleChange}
        />

        <input
          name="totalFee"
          placeholder="Total Fee"
          onChange={handleChange}
        />

        <input
          name="paidAmount"
          placeholder="Paid Amount"
          onChange={handleChange}
        />

        <input type="date" name="paymentDate" onChange={handleChange} />

        <button>Add Fee</button>
      </form>
    </div>
  );
}

export default AddFee;
