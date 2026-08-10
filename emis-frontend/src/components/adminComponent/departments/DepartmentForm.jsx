import { useEffect, useState } from "react";

export default function DepartmentForm({
  department,

  onSave,

  onClose,
}) {
  const [formData, setFormData] = useState({
    departmentCode: "",

    deptName: "",
  });

  useEffect(() => {
    if (department) {
      setFormData({
        departmentCode: department.departmentCode,

        deptName: department.deptName,
      });
    }
  }, [department]);

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
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {department ? "Update Department" : "Add Department"}
            </h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label>Department Code</label>

                <input
                  type="text"
                  name="departmentCode"
                  className="form-control"
                  value={formData.departmentCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Department Name</label>

                <input
                  type="text"
                  name="deptName"
                  className="form-control"
                  value={formData.deptName}
                  onChange={handleChange}
                  required
                />
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
                {department ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
