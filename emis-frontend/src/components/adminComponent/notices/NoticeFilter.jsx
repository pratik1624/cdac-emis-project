import { useEffect, useState } from "react";

import { FaPlus, FaSearch } from "react-icons/fa";

export default function NoticeFilter({
  notices,

  setFilteredNotices,

  onAddNotice,
}) {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("newest");

  useEffect(() => {
    let filtered = [...notices];

    if (search.trim() !== "") {
      filtered = filtered.filter(
        (notice) =>
          notice.title

            .toLowerCase()

            .includes(search.toLowerCase()) ||
          notice.description

            .toLowerCase()

            .includes(search.toLowerCase()),
      );
    }

    filtered.sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.publishDate) - new Date(a.publishDate);
      }

      return new Date(a.publishDate) - new Date(b.publishDate);
    });

    setFilteredNotices(filtered);
  }, [notices, search, sort, setFilteredNotices]);

  return (
    <div className="notice-filter-card">
      <div className="row g-3 align-items-end">
        <div className="col-lg-7">
          <label className="form-label">Search Notice</label>

          <div className="search-box">
            <FaSearch className="search-icon" />

            <input
              type="text"
              className="form-control"
              placeholder="Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-3">
          <label className="form-label">Sort</label>

          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest First</option>

            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <div className="col-lg-2 d-grid">
          <button className="btn btn-success" onClick={onAddNotice}>
            <FaPlus className="me-2" />
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
