import { useEffect, useState } from "react";

export default function NoticeForm({
  notice,

  onSave,

  onClose,
}) {
  const [formData, setFormData] = useState({
    title: "",

    description: "",

    publishDate: "",
  });

  useEffect(() => {
    if (notice) {
      setFormData({
        title: notice.title,

        description: notice.description,

        publishDate: notice.publishDate,
      });
    }
  }, [notice]);

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
              {notice ? "Update Notice" : "Publish Notice"}
            </h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Notice Title</label>

                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter notice title"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>

                <textarea
                  className="form-control"
                  rows="6"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write the complete notice..."
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Publish Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="publishDate"
                  value={formData.publishDate}
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
                {notice ? "Update Notice" : "Publish Notice"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
