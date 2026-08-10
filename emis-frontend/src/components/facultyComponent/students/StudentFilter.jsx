import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function StudentFilter({

    students,

    semester,

    setSemester,

    setFilteredStudents

}) {

    const [search, setSearch] = useState("");

    useEffect(() => {

        let filtered = students;

        if (search.trim() !== "") {

            filtered = filtered.filter(student =>

                student.studentName
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                student.rollNumber
                    .toLowerCase()
                    .includes(search.toLowerCase())

            );

        }

        setFilteredStudents(filtered);

    }, [

        students,

        search,

        setFilteredStudents

    ]);

    return (

        <div className="student-filter">

            <div className="search-box">

                <FaSearch className="search-icon" />

                <input
                    type="text"
                    placeholder="Search by name or roll number..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <select
                className="semester-filter"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
            >

                <option value="">
                    Select Semester
                </option>

                {[1,2,3,4,5,6,7,8].map((sem) => (

                    <option
                        key={sem}
                        value={sem}
                    >
                        Semester {sem}
                    </option>

                ))}

            </select>

        </div>

    );

}