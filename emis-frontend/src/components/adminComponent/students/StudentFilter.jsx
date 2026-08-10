import { useEffect, useState } from "react";

import { FaSearch, FaPlus } from "react-icons/fa";

export default function StudentFilter({
  students,

  setFilteredStudents,

  onAddStudent,
}) {
  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("");

  useEffect(() => {
    let filtered = students;

    if (department !== "") {
      filtered = filtered.filter(
        (student) => student.department === department,
      );
    }

    if (search.trim() !== "") {
     filtered = filtered.filter(
       (student) =>
         `${student.firstName} ${student.lastName}`
           .toLowerCase()
           .includes(search.toLowerCase()) ||
         student.rollNumber.toLowerCase().includes(search.toLowerCase()),
     );
    }

    setFilteredStudents(filtered);
  }, [students, department, search, setFilteredStudents]);

  const departments = [
    ...new Set(students.map((student) => student.department)),
  ];

  return (
    <div className="student-filter">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        className="department-filter"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>

        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <button className="btn btn-success" onClick={onAddStudent}>
        <FaPlus className="me-2" />
        Add Student
      </button>
    </div>
  );
}
