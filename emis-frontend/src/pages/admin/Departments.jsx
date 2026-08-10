import { useEffect, useState } from "react";

import {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} from "../../api/adminApi";

import DepartmentFilter from "../../components/adminComponent/departments/DepartmentFilter";
import DepartmentTable from "../../components/adminComponent/departments/DepartmentTable";
import DepartmentForm from "../../components/adminComponent/departments/DepartmentForm";
import DeleteDepartmentModal from "../../components/adminComponent/departments/DeleteDepartmentModal";

import "../../styles/adminStyles/departments.css";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  const [filteredDepartments, setFilteredDepartments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const data = await getDepartments();

      setDepartments(data);

      setFilteredDepartments(data);
    } catch (err) {
      console.log(err);

      setError("Unable to load departments.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedDepartment(null);

    setShowForm(true);
  };

  const handleEdit = (department) => {
    setSelectedDepartment(department);

    setShowForm(true);
  };

  const handleDeleteClick = (department) => {
    setSelectedDepartment(department);

    setShowDelete(true);
  };

  const handleSave = async (department) => {
    try {
      if (selectedDepartment) {
        await updateDepartment(
          selectedDepartment.id,

          department,
        );
      } else {
        await addDepartment(department);
      }

      setShowForm(false);

      loadDepartments();
    } catch (err) {
      console.log(err);

      alert("Unable to save department.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDepartment(selectedDepartment.id);

      setShowDelete(false);

      loadDepartments();
    } catch (err) {
      console.log(err);

      alert("Unable to delete department.");
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <h4>Loading Departments...</h4>
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
        <h2 className="page-title">Departments</h2>

        <p className="page-subtitle">Manage departments.</p>
      </div>

      <DepartmentFilter
        departments={departments}
        setFilteredDepartments={setFilteredDepartments}
        onAddDepartment={handleAdd}
      />

      <DepartmentTable
        departments={filteredDepartments}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      {showForm && (
        <DepartmentForm
          department={selectedDepartment}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}

      {showDelete && (
        <DeleteDepartmentModal
          department={selectedDepartment}
          onDelete={handleDelete}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}
