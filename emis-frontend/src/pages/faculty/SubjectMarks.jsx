import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    getSubjectMarks,
    saveMarks
} from "../../api/facultyApi";

import SubjectMarksTable from "../../components/facultyComponent/subjects/SubjectMarksTable";

import "../../styles/facultyStyles/subjects.css";

export default function SubjectMarks() {

    const { subjectId } = useParams();

    const [marks, setMarks] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadMarks();

    }, [subjectId]);

    const loadMarks = async () => {

        try {

            const data = await getSubjectMarks(subjectId);

            setMarks(data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    const handleSave = async () => {

        try {

            const request = marks.map(item => ({

                studentId: item.studentId,

                obtainedMarks: Number(item.obtainedMarks),

                totalMarks: Number(item.totalMarks)

            }));

            await saveMarks(subjectId, request);

            alert("Marks Saved Successfully");

        }

        catch (err) {

            console.error(err);

            alert("Unable to Save Marks");

        }

    };

    if (loading) {

        return <h4>Loading...</h4>;

    }

    return (

        <div className="container-fluid">

            <h2 className="mb-4">

                Manage Marks

            </h2>

            <SubjectMarksTable

                marks={marks}

                setMarks={setMarks}

            />

            <div className="text-end mt-4">

                <button

                    className="btn btn-success"

                    onClick={handleSave}

                >

                    Save Marks

                </button>

            </div>

        </div>

    );

}