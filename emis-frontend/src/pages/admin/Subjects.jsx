import { useEffect, useState } from "react";

import {
  getSubjects,
  addSubject,
  updateSubject,
  deleteSubject,
  getDepartments,
} from "../../api/adminApi";

import SubjectStatistics from "../../components/adminComponent/subjects/SubjectStatistics";
import SubjectFilter from "../../components/adminComponent/subjects/SubjectFilter";
import SubjectTable from "../../components/adminComponent/subjects/SubjectTable";
import SubjectForm from "../../components/adminComponent/subjects/SubjectForm";
import DeleteSubjectModal from "../../components/adminComponent/subjects/DeleteSubjectModal";

import "../../styles/adminStyles/subjects.css";

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);

  const [filteredSubjects, setFilteredSubjects] = useState([]);

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [subjectData, departmentData] = await Promise.all([
        getSubjects(),

        getDepartments(),
      ]);

      setSubjects(subjectData);

      setFilteredSubjects(subjectData);

      setDepartments(departmentData);
    } catch (err) {
      console.log(err);

      setError("Unable to load subjects.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedSubject(null);

    setShowForm(true);
  };

  const handleEdit = (subject) => {
    setSelectedSubject(subject);

    setShowForm(true);
  };

  const handleDeleteClick = (subject) => {
    setSelectedSubject(subject);

    setShowDelete(true);
  };

  const handleSave = async (formData) => {
    try {
      if (selectedSubject) {
        await updateSubject(
          selectedSubject.Id,

          formData,
        );
      } else {
        await addSubject(formData);
      }

      setShowForm(false);

      loadData();
    } catch (err) {
      console.log(err);

      alert("Unable to save subject.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSubject(selectedSubject.Id);

      setShowDelete(false);

      loadData();
    } catch (err) {
      console.log(err);

      alert("Unable to delete subject.");
    }
  };

  if (loading) {
    return <h4>Loading Subjects...</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <div className="subjects-page">
      <div className="subjects-header">
        <h2>Subject Management</h2>

        <p>Manage all subjects across departments.</p>
      </div>

      <SubjectStatistics subjects={subjects} />

      <SubjectFilter
        subjects={subjects}
        departments={departments}
        setFilteredSubjects={setFilteredSubjects}
        onAddSubject={handleAdd}
      />

      <SubjectTable
        subjects={filteredSubjects}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      {showForm && (
        <SubjectForm
          subject={selectedSubject}
          departments={departments}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}

      {showDelete && (
        <DeleteSubjectModal
          subject={selectedSubject}
          onDelete={handleDelete}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}
