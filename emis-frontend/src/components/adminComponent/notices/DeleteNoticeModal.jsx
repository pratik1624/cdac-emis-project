export default function DeleteNoticeModal({
  notice,

  onDelete,

  onClose,
}) {
  if (!notice) {
    return null;
  }

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
            <h5 className="modal-title">Delete Notice</h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <div className="alert alert-warning">
              <strong>{notice.title}</strong>
            </div>

            <p>Are you sure you want to delete this notice?</p>

            <p className="text-muted">This action cannot be undone.</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>

            <button className="btn btn-danger" onClick={onDelete}>
              Delete Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
