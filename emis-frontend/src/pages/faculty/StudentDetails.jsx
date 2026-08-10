import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getStudentProfile } from "../../api/facultyApi";

import StudentHeader from "../../components/facultyComponent/studentDetails/StudentHeader";
import AcademicDetails from "../../components/facultyComponent/studentDetails/AcademicDetails";
import AttendanceDetails from "../../components/facultyComponent/studentDetails/AttendanceDetails";
import MarksDetails from "../../components/facultyComponent/studentDetails/MarksDetails";
import ContactDetails from "../../components/facultyComponent/studentDetails/ContactDetails";

import "../../styles/facultyStyles/studentDetails.css";

export default function StudentDetails() {

    const { id } = useParams();

    const [studentData, setStudentData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        loadStudent();

    }, [id]);

    const loadStudent = async () => {

        try {

            const data = await getStudentProfile(id);

            setStudentData(data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to load student.");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h4>Loading Student...</h4>;

    }

    if (error) {

        return <h4>{error}</h4>;

    }

    return (

        <div className="student-details-page">

            <StudentHeader

                student={studentData.student}

            />

            <div className="details-grid">

                <AcademicDetails

                    student={studentData.student}

                />

                <ContactDetails

                    student={studentData.student}

                />

            </div>

            <AttendanceDetails

                attendance={studentData.attendance}

            />

            <MarksDetails

                results={studentData.results}

            />

        </div>

    );

}