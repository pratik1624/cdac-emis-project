import { useEffect, useState } from "react";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../../api/adminApi";

import StudentStatistics from "../../components/adminComponent/students/StudentStatistics";
import StudentFilter from "../../components/adminComponent/students/StudentFilter";
import StudentTable from "../../components/adminComponent/students/StudentTable";
import StudentForm from "../../components/adminComponent/students/StudentForm";
import DeleteStudentModal from "../../components/adminComponent/students/DeleteStudentModal";

import "../../styles/adminStyles/students.css";

export default function Students() {
  const [students, setStudents] = useState([]);

  const [filteredStudents, setFilteredStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await getStudents();

      setStudents(data);

      setFilteredStudents(data);
    } catch (err) {
      console.log(err);

      setError("Unable to load students.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);

    setShowForm(true);
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);

    setShowForm(true);
  };

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);

    setShowDelete(true);
  };

  const handleSaveStudent = async (student) => {
    try {
      if (selectedStudent) {
        await updateStudent(
          selectedStudent.Id,

          student,
        );
      } else {
        await addStudent(student);
      }

      setShowForm(false);

      loadStudents();
    } catch (err) {
      console.log(err);

      alert("Unable to save student.");
    }
  };

  const handleDeleteStudent = async () => {
    try {
      await deleteStudent(selectedStudent.Id);

      setShowDelete(false);

      loadStudents();
    } catch (err) {
      console.log(err);

      alert("Unable to delete student.");
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <h4>Loading Students...</h4>
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
        <h2 className="page-title">Students</h2>

        <p className="page-subtitle">Manage all students.</p>
      </div>
      <StudentStatistics students={students} />

      <StudentFilter
        students={students}
        setFilteredStudents={setFilteredStudents}
        onAddStudent={handleAddStudent}
      />

      <StudentTable
        students={filteredStudents}
        onEdit={handleEditStudent}
        onDelete={handleDeleteClick}
      />

      {showForm && (
        <StudentForm
          student={selectedStudent}
          onSave={handleSaveStudent}
          onClose={() => setShowForm(false)}
        />
      )}

      {showDelete && (
        <DeleteStudentModal
          student={selectedStudent}
          onDelete={handleDeleteStudent}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}
