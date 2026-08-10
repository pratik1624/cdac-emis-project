import { useEffect, useState } from "react";

import { getDepartments } from "../../../api/adminApi";

export default function FacultyForm({

    faculty,

    onSave,

    onClose

}) {
  const [departments, setDepartments] = useState([]);

  const [formData, setFormData] = useState({
    employeeCode: "",

    firstName: "",

    lastName: "",

    DOB: "",

    designation: "",

    gender: "",

    joiningDate: "",

    email: "",

    phone: "",

    department: "",
  });

  useEffect(() => {
    loadDepartments();
  }, []);

  useEffect(() => {
    if (faculty) {
      setFormData({
        employeeCode: faculty.employeeCode,

        firstName: faculty.firstName,

        lastName: faculty.lastName,

        DOB: faculty.DOB,

        designation: faculty.designation,

        gender: faculty.gender,

        joiningDate: faculty.joiningDate || "",

        email: faculty.email,

        phone: faculty.phone,

        department: faculty.department,
      });
    }
  }, [faculty]);

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
              {faculty ? "Update Faculty" : "Add Faculty"}
            </h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Employee Code</label>

                  <input
                    type="text"
                    name="employeeCode"
                    className="form-control"
                    value={formData.employeeCode}
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
                  <label>Phone</label>

                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Gender</label>

                  <select
                    name="gender"
                    className="form-select"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>

                    <option value="MALE">Male</option>

                    <option value="FEMALE">Female</option>
                  </select>
                </div>
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
                  <label>Designation</label>

                  <select
                    name="designation"
                    className="form-select"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Designation</option>

                    <option value="Professor">Professor</option>

                    <option value="Associate Professor">
                      Associate Professor
                    </option>

                    <option value="Assistant Professor">
                      Assistant Professor
                    </option>

                    <option value="Lecturer">Lecturer</option>

                    <option value="HOD">HOD</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Date of Birth</label>

                  <input
                    type="date"
                    name="DOB"
                    className="form-control"
                    value={formData.DOB}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Joining Date</label>

                  <input
                    type="date"
                    name="joiningDate"
                    className="form-control"
                    value={formData.joiningDate}
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
                {faculty ? "Update Faculty" : "Add Faculty"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}