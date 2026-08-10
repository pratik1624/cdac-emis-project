import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    getSubjectMarks,
    saveMarks
} from "../../api/facultyApi";

import MarksSummary from "../../components/facultyComponent/marks/MarksSummary";
import MarksTable from "../../components/facultyComponent/marks/MarksTable";

import "../../styles/facultyStyles/marks.css";

export default function SubjectMarks() {

    const { subjectId } = useParams();

    const [marks, setMarks] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        loadMarks();

    }, [subjectId]);

    const loadMarks = async () => {

        try {

            const data = await getSubjectMarks(subjectId);

            setMarks(data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to load marks.");

        }

        finally {

            setLoading(false);

        }

    };

    const handleSave = async () => {

        try {

            const request = marks.map(student => ({

                studentId: student.studentId,

                obtainedMarks: Number(student.obtainedMarks),

                totalMarks: Number(student.totalMarks)

            }));

            await saveMarks(subjectId, request);

            alert("Marks saved successfully.");

        }

        catch (err) {

            console.log(err);

            alert("Unable to save marks.");

        }

    };

    if (loading) {

        return <h4>Loading Marks...</h4>;

    }

    if (error) {

        return <h4>{error}</h4>;

    }

    return (

        <div className="marks-page">

            <div className="marks-header">

                <h2>

                    Subject Marks

                </h2>

                <p>

                    View and update student marks.

                </p>

            </div>

            <MarksSummary

                marks={marks}

            />

            <MarksTable

                marks={marks}

                setMarks={setMarks}

                onSave={handleSave}

            />

        </div>

    );

}