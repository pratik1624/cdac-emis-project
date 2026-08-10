import { useEffect, useState } from "react";

import { getDepartments } from "../../../api/adminApi";

export default function StudentForm({

    student,

    onSave,

    onClose

}) {
  const [departments, setDepartments] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",

    lastName: "",

    rollNumber: "",

    email: "",

    phone: "",

    gender: "",

    address: "",

    department: "",

    semester: "",

    dob: "",
  });

  useEffect(() => {
    loadDepartments();
  }, []);

  useEffect(() => {
    if (student) {
      setFormData({
        Id: student.Id,
        firstName: student.firstName,

        lastName: student.lastName,

        rollNumber: student.rollNumber,

        email: student.email,

        phone: student.phone,

        gender: student.gender,

        address: student.address,

        department: student.department,

        semester: student.semester,

        dob: student.dob,
      });
    }
  }, [student]);

  const loadDepartments = async () => {
    try {
      const data = await getDepartments();

      setDepartments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",

        background: "rgba(0,0,0,.5)",
      }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {student ? "Update Student" : "Add Student"}
            </h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Roll Number</label>

                  <input
                    type="text"
                    name="rollNumber"
                    className="form-control"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone</label>

                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Gender</label>

                  <select
                    name="gender"
                    className="form-select"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>

                    <option value="MALE">Male</option>

                    <option value="FEMALE">Female</option>
                  </select>
                </div>
                {/* DEPARTMENT */}
                <div className="col-md-6 mb-3">
                  <label>Department</label>

                  <select
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>

                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.deptName}>
                        {dept.deptName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Semester</label>

                  <select
                    name="semester"
                    className="form-select"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Semester</option>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={sem} value={sem}>
                        Semester {sem}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Date of Birth</label>

                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Address</label>

                  <textarea
                    rows="3"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-success">
                {student ? "Update Student" : "Add Student"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}