import { useEffect, useState } from "react";

import {
  getFaculty,
  addFaculty,
  updateFaculty,
  deleteFaculty,
} from "../../api/adminApi";

import FacultyStatistics from "../../components/adminComponent/faculty/FacultyStatistics";
import FacultyFilter from "../../components/adminComponent/faculty/FacultyFilter";
import FacultyTable from "../../components/adminComponent/faculty/FacultyTable";
import FacultyForm from "../../components/adminComponent/faculty/FacultyForm";
import DeleteFacultyModal from "../../components/adminComponent/faculty/DeleteFacultyModal";

import "../../styles/adminStyles/faculty.css";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);

  const [filteredFaculty, setFilteredFaculty] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    loadFaculty();
  }, []);

  const loadFaculty = async () => {
    try {
      const data = await getFaculty();

      setFaculty(data);

      setFilteredFaculty(data);
    } catch (err) {
      console.log(err);

      setError("Unable to load faculty.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedFaculty(null);

    setShowForm(true);
  };

  const handleEdit = (faculty) => {
    setSelectedFaculty(faculty);

    setShowForm(true);
  };

  const handleDeleteClick = (faculty) => {
    setSelectedFaculty(faculty);

    setShowDelete(true);
  };

  const handleSave = async (data) => {
    try {
      if (selectedFaculty) {
        await updateFaculty(
          selectedFaculty.Id,

          data,
        );
      } else {
        await addFaculty(data);
      }

      setShowForm(false);

      loadFaculty();
    } catch (err) {
      console.log(err);

      alert("Unable to save faculty.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFaculty(selectedFaculty.Id);

      setShowDelete(false);

      loadFaculty();
    } catch (err) {
      console.log(err);

      alert("Unable to delete faculty.");
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <h4>Loading Faculty...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-page">
        <h4>{error}</h4>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2 className="page-title">Faculty</h2>

        <p className="page-subtitle">Manage faculty members.</p>
      </div>

      <FacultyStatistics faculty={faculty} />

      <FacultyFilter
        faculty={faculty}
        setFilteredFaculty={setFilteredFaculty}
        onAddFaculty={handleAdd}
      />

      <FacultyTable
        faculty={filteredFaculty}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      {showForm && (
        <FacultyForm
          faculty={selectedFaculty}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}

      {showDelete && (
        <DeleteFacultyModal
          faculty={selectedFaculty}
          onDelete={handleDelete}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}
