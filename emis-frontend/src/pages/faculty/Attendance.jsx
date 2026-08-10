import { useState } from "react";

import AttendanceFilter from "../../components/facultyComponent/attendance/AttendanceFilter";
import AttendanceSummary from "../../components/facultyComponent/attendance/AttendanceSummary";
import AttendanceTable from "../../components/facultyComponent/attendance/AttendanceTable";

import "../../styles/facultyStyles/attendance.css";

export default function Attendance() {

    const [students, setStudents] = useState([]);

    const [selectedSubject, setSelectedSubject] = useState("");

    const [selectedSemester, setSelectedSemester] = useState("");

    const [selectedDate, setSelectedDate] = useState("");

    return (

        <div className="attendance-page">

            <div className="attendance-header">

                <h2>

                    Attendance

                </h2>

                <p>

                    Mark and upload student attendance.

                </p>

            </div>

            <AttendanceFilter

                selectedSubject={selectedSubject}

                setSelectedSubject={setSelectedSubject}

                selectedSemester={selectedSemester}

                setSelectedSemester={setSelectedSemester}

                selectedDate={selectedDate}

                setSelectedDate={setSelectedDate}

                setStudents={setStudents}

            />

            <AttendanceSummary

                students={students}

            />

            <AttendanceTable

                students={students}

                setStudents={setStudents}

            />

        </div>

    );

}