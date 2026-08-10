import { useEffect, useState } from "react";

import { FaSearch, FaPlus } from "react-icons/fa";

export default function FacultyFilter({
  faculty,

  setFilteredFaculty,

  onAddFaculty,
}) {
  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("");

  useEffect(() => {
    let filtered = faculty;

    if (department !== "") {
      filtered = filtered.filter((member) => member.department === department);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter(
        (member) =>
          `${member.firstName} ${member.lastName}`

            .toLowerCase()

            .includes(search.toLowerCase()) ||
          member.employeeCode

            .toLowerCase()

            .includes(search.toLowerCase()),
      );
    }

    setFilteredFaculty(filtered);
  }, [faculty, department, search, setFilteredFaculty]);

  const departments = [...new Set(faculty.map((member) => member.department))];

  return (
    <div className="faculty-filter">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by name or employee code..."
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

      <button className="btn btn-success" onClick={onAddFaculty}>
        <FaPlus className="me-2" />
        Add Faculty
      </button>
    </div>
  );
}
