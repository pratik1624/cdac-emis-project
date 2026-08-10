import { useEffect, useState } from "react";

import { FaPlus, FaSearch } from "react-icons/fa";

export default function DepartmentFilter({
  departments,

  setFilteredDepartments,

  onAddDepartment,
}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    let filtered = departments;

    if (search.trim() !== "") {
      filtered = filtered.filter(
        (department) =>
          department.departmentCode

            .toLowerCase()

            .includes(search.toLowerCase()) ||
          department.deptName

            .toLowerCase()

            .includes(search.toLowerCase()),
      );
    }

    setFilteredDepartments(filtered);
  }, [departments, search, setFilteredDepartments]);

  return (
    <div className="department-filter">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by code or department name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button className="btn btn-success add-btn" onClick={onAddDepartment}>
        <FaPlus className="me-2" />
        Add Department
      </button>
    </div>
  );
}
