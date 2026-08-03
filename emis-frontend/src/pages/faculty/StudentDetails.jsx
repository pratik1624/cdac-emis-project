import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getStudentProfile } from "../../api/facultyApi";

import StudentProfileCard from "../../components/facultyComponent/students/StudentProfileCard";
import AttendanceSummary from "../../components/facultyComponent/students/AttendanceSummary";
import ResultSummary from "../../components/facultyComponent/students/ResultSummary";

import "../../styles/facultyStyles/students.css";

export default function StudentDetails() {

    const { id } = useParams();

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadStudent();

    }, [id]);

    const loadStudent = async () => {

        try {

            const response = await getStudentProfile(id);

            setData(response);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h4>Loading...</h4>;

    }

    return (

        <div className="container-fluid">

            <StudentProfileCard

                student={data.student}

            />

            <div className="row mt-4">

                <div className="col-lg-6">

                    <AttendanceSummary

                        attendance={data.attendance}

                    />

                </div>

                <div className="col-lg-6">

                    <ResultSummary

                        results={data.results}

                    />

                </div>

            </div>

        </div>

    );

}