import { useState } from "react";

import {
    loadStudentsForAttendance,
    uploadAttendance
} from "../../api/facultyApi";

import AttendanceFilter from "../../components/facultyComponent/attendance/AttendanceFilter";
import AttendanceTable from "../../components/facultyComponent/attendance/AttendanceTable";

import "../../styles/facultyStyles/attendance.css";

export default function Attendance() {

    const [students, setStudents] = useState([]);

    const [filter, setFilter] = useState({

        semester: "",

        subjectId: "",

        

    });

    const handleLoad = async () => {

        try {

            const data = await loadStudentsForAttendance(filter);

            setStudents(data);

        }

        catch (err) {

            console.error(err);

        }

    };

    const handleUpload = async () => {

        try {

await uploadAttendance({

    subjectId: Number(filter.subjectId),

    semester: Number(filter.semester),

    students: students

});

            alert("Attendance Uploaded");

        }

        catch(err){

            console.error(err);

        }

    };

    return (

        <div className="container-fluid">

            <h2 className="mb-4">

                Attendance

            </h2>

            <AttendanceFilter

                filter={filter}

                setFilter={setFilter}

                onLoad={handleLoad}

            />

            {

                students.length>0 &&

                <AttendanceTable

                    students={students}

                    setStudents={setStudents}

                    onUpload={handleUpload}

                />

            }

        </div>

    );

}