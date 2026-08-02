import { useEffect, useState } from "react";

import { getSubjects } from "../../api/facultyApi";

import SubjectTable from "../../components/facultyComponent/subjects/SubjectTable";

import "../../styles/facultyStyles/subjects.css";

export default function Subjects() {

    const [subjects, setSubjects] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadSubjects();

    }, []);

    const loadSubjects = async () => {

        try {

            const data = await getSubjects();

            setSubjects(data);

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

            <h2 className="mb-4">

                Assigned Subjects

            </h2>

            <SubjectTable subjects={subjects} />

        </div>

    );

}