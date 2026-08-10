import { useEffect, useState } from "react";

import {
  getNotices,
  addNotice,
  updateNotice,
  deleteNotice,
} from "../../api/adminApi";

import NoticeStatistics from "../../components/adminComponent/notices/NoticeStatistics";
import NoticeFilter from "../../components/adminComponent/notices/NoticeFilter";
import NoticeTable from "../../components/adminComponent/notices/NoticeTable";
import NoticeForm from "../../components/adminComponent/notices/NoticeForm";
import DeleteNoticeModal from "../../components/adminComponent/notices/DeleteNoticeModal";

import "../../styles/adminStyles/notices.css";

export default function Notices() {
  const [notices, setNotices] = useState([]);

  const [filteredNotices, setFilteredNotices] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [selectedNotice, setSelectedNotice] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    try {
      const data = await getNotices();

      setNotices(data);

      setFilteredNotices(data);
    } catch (err) {
      console.log(err);

      setError("Unable to load notices.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedNotice(null);

    setShowForm(true);
  };

  const handleEdit = (notice) => {
    setSelectedNotice(notice);

    setShowForm(true);
  };

  const handleDeleteClick = (notice) => {
    setSelectedNotice(notice);

    setShowDelete(true);
  };

  const handleSave = async (notice) => {
    try {
      if (selectedNotice) {
        await updateNotice(
          selectedNotice.id,

          notice,
        );
      } else {
        await addNotice(notice);
      }

      setShowForm(false);

      loadNotices();
    } catch (err) {
      console.log(err);

      alert("Unable to save notice.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNotice(selectedNotice.id);

      setShowDelete(false);

      loadNotices();
    } catch (err) {
      console.log(err);

      alert("Unable to delete notice.");
    }
  };

  if (loading) {
    return <h4>Loading Notices...</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <div className="notices-page">
      <div className="notices-header">
        <h2>Notice Management</h2>

        <p>Publish and manage college notices.</p>
      </div>

      <NoticeStatistics notices={notices} />

      <NoticeFilter
        notices={notices}
        setFilteredNotices={setFilteredNotices}
        onAddNotice={handleAdd}
      />

      <NoticeTable
        notices={filteredNotices}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      {showForm && (
        <NoticeForm
          notice={selectedNotice}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}

      {showDelete && (
        <DeleteNoticeModal
          notice={selectedNotice}
          onDelete={handleDelete}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}
