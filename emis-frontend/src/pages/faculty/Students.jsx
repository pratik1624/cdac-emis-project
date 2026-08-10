import { useEffect, useState } from "react";

import { getDepartmentStudents } from "../../api/facultyApi";

import StudentStatistics from "../../components/facultyComponent/students/StudentStatistics";
import StudentFilter from "../../components/facultyComponent/students/StudentFilter";
import StudentTable from "../../components/facultyComponent/students/StudentTable";

import "../../styles/facultyStyles/students.css";

export default function Students() {

    const [students, setStudents] = useState([]);

    const [filteredStudents, setFilteredStudents] = useState([]);

    const [semester, setSemester] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {

        if (semester !== "") {

            loadStudents();

        }

    }, [semester]);

    const loadStudents = async () => {

        setLoading(true);

        setError("");

        try {

            const data = await getDepartmentStudents(Number(semester));

            setStudents(data);

            setFilteredStudents(data);

        }

        catch (err) {

            console.error(err);

            setError("Unable to load students.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="students-page">

            <div className="students-header">

                <h2>

                    Students

                </h2>

                <p>

                    View students from your department.

                </p>

            </div>

            <StudentFilter

                students={students}

                semester={semester}

                setSemester={setSemester}

                setFilteredStudents={setFilteredStudents}

            />

            {
                loading && (

                    <div className="mt-4">

                        <h5>Loading Students...</h5>

                    </div>

                )
            }

            {
                error && (

                    <div className="alert alert-danger mt-3">

                        {error}

                    </div>

                )
            }

            {
                !loading && !error && semester !== "" && (

                    <>
                        <StudentStatistics students={students} />

                        <StudentTable students={filteredStudents} />
                    </>

                )
            }

            {
                semester === "" && (

                    <div className="alert alert-info mt-4">

                        Please select a semester to load students.

                    </div>

                )
            }

        </div>

    );

}