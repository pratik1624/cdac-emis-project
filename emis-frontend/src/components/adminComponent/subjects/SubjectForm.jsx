import { useEffect, useState } from "react";

export default function SubjectForm({
  subject,

  departments,

  onSave,

  onClose,
}) {
  const [formData, setFormData] = useState({
    subjectCode: "",

    subjectName: "",

    department: "",

    semester: "",
  });

  useEffect(() => {
    if (subject) {
      setFormData({
        subjectCode: subject.subjectCode,

        subjectName: subject.subjectName,

        department: subject.department,

        semester: subject.semester,
      });
    }
  }, [subject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,

      semester: Number(formData.semester),
    });
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
              {subject ? "Update Subject" : "Add Subject"}
            </h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Subject Code</label>

                  <input
                    type="text"
                    className="form-control"
                    name="subjectCode"
                    value={formData.subjectCode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Subject Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="subjectName"
                    value={formData.subjectName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Department</label>

                  <select
                    className="form-select"
                    name="department"
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
                  <label className="form-label">Semester</label>

                  <select
                    className="form-select"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Semester</option>

                    {Array.from(
                      {
                        length: 8,
                      },

                      (_, i) => i + 1,
                    ).map((sem) => (
                      <option key={sem} value={sem}>
                        Semester {sem}
                      </option>
                    ))}
                  </select>
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
                {subject ? "Update Subject" : "Save Subject"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
