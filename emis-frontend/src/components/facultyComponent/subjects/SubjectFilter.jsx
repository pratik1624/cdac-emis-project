import { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";

export default function SubjectFilter({

    subjects,

    setFilteredSubjects

}) {

    const [search, setSearch] = useState("");

    useEffect(() => {

        const filtered = subjects.filter((subject) =>

            subject.subjectName
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            subject.subjectCode
                .toLowerCase()
                .includes(search.toLowerCase())

        );

        setFilteredSubjects(filtered);

    }, [search, subjects, setFilteredSubjects]);

    return (

        <div className="subject-filter">

            <div className="search-box">

                <FaSearch className="search-icon" />

                <input

                    type="text"

                    placeholder="Search by subject name or code..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

            </div>

        </div>

    );

}