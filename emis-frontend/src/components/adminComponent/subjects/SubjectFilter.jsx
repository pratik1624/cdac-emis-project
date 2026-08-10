import { useEffect, useState } from "react";

import { FaSearch, FaPlus } from "react-icons/fa";

export default function SubjectFilter({
  subjects,

  departments,

  setFilteredSubjects,

  onAddSubject,
}) {
  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("");

  const [semester, setSemester] = useState("");

  useEffect(() => {
    let filtered = subjects;

    // Department Filter

    if (department !== "") {
      filtered = filtered.filter(
        (subject) => subject.department === department,
      );
    }

    // Semester Filter

    if (semester !== "") {
      filtered = filtered.filter(
        (subject) => subject.semester === Number(semester),
      );
    }

    // Search Filter

    if (search.trim() !== "") {
      filtered = filtered.filter(
        (subject) =>
          subject.subjectName

            .toLowerCase()

            .includes(search.toLowerCase()) ||
          subject.subjectCode

            .toLowerCase()

            .includes(search.toLowerCase()),
      );
    }

    setFilteredSubjects(filtered);
  }, [search, department, semester, subjects, setFilteredSubjects]);

  const semesters = [
    ...new Set(subjects.map((subject) => subject.semester)),
  ].sort((a, b) => a - b);

  return (
    <div className="subject-filter-card">
      <div className="row g-3 align-items-end">
        <div className="col-lg-5">
          <label className="form-label">Search Subject</label>

          <div className="search-box">
            <FaSearch className="search-icon" />

            <input
              type="text"
              className="form-control"
              placeholder="Search by code or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-3">
          <label className="form-label">Department</label>

          <select
            className="form-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">All Departments</option>

            {departments.map((dept) => (
              <option key={dept.id} value={dept.deptName}>
                {dept.deptName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-2">
          <label className="form-label">Semester</label>

          <select
            className="form-select"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">All</option>

            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                Semester {sem}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-2 d-grid">
          <button className="btn btn-success" onClick={onAddSubject}>
            <FaPlus className="me-2" />
            Add Subject
          </button>
        </div>
      </div>
    </div>
  );
}
