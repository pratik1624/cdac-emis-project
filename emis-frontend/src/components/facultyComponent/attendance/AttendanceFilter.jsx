import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

import {
    getAssignedSubjects,
    loadStudentsForAttendance
} from "../../../api/facultyApi";

export default function AttendanceFilter({

    selectedSubject,
    setSelectedSubject,

    selectedSemester,
    setSelectedSemester,

    selectedDate,
    setSelectedDate,

    setStudents

}) {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {

        fetchSubjects();

    }, []);

    const fetchSubjects = async () => {

        try {

            const data = await getAssignedSubjects();

            setSubjects(data);

        } catch (err) {

            console.log(err);

        }

    };

    const handleLoadStudents = async () => {

        if (!selectedSemester || !selectedSubject) {

            alert("Please select semester and subject.");

            return;

        }

        try {

            const data = await loadStudentsForAttendance({

                semester: Number(selectedSemester),

                subjectId: Number(selectedSubject)

            });

            // Save selected values for upload request
            localStorage.setItem(
                "attendanceSemester",
                selectedSemester
            );

            localStorage.setItem(
                "attendanceSubjectId",
                selectedSubject
            );

            // Default every student as Present
            const studentsWithStatus = data.map(student => ({

                ...student,

                status: "Present"

            }));

            setStudents(studentsWithStatus);

        }

        catch (err) {

            console.log(err);

            alert("Unable to load students.");

        }

    };

    return (

        <div className="attendance-filter">

            <div className="attendance-filter-grid">

                <select
                    className="form-select"
                    value={selectedSemester}
                    onChange={(e) =>
                        setSelectedSemester(e.target.value)
                    }
                >

                    <option value="">
                        Select Semester
                    </option>

                    {[1,2,3,4,5,6,7,8].map((semester) => (

                        <option
                            key={semester}
                            value={semester}
                        >

                            Semester {semester}

                        </option>

                    ))}

                </select>

                <select
                    className="form-select"
                    value={selectedSubject}
                    onChange={(e) =>
                        setSelectedSubject(e.target.value)
                    }
                >

                    <option value="">
                        Select Subject
                    </option>

                    {

                        subjects.map(subject => (

                            <option
                                key={subject.subjectId}
                                value={subject.subjectId}
                            >

                                {subject.subjectCode} - {subject.subjectName}

                            </option>

                        ))

                    }

                </select>

                <input
                    type="date"
                    className="form-control"
                    value={selectedDate}
                    onChange={(e) =>
                        setSelectedDate(e.target.value)
                    }
                />

                <button
                    className="btn btn-success"
                    onClick={handleLoadStudents}
                >

                    <FaFilter className="me-2" />

                    Load Students

                </button>

            </div>

        </div>

    );

}