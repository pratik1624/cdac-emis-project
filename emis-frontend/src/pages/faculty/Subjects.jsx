import { useEffect, useState } from "react";

import { getAssignedSubjects } from "../../api/facultyApi";

import SubjectStatistics from "../../components/facultyComponent/subjects/SubjectStatistics";
import SubjectFilter from "../../components/facultyComponent/subjects/SubjectFilter";
import SubjectTable from "../../components/facultyComponent/subjects/SubjectTable";

import "../../styles/facultyStyles/subjects.css";

export default function Subjects() {

    const [subjects, setSubjects] = useState([]);

    const [filteredSubjects, setFilteredSubjects] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        loadSubjects();

    }, []);

    const loadSubjects = async () => {

        try {

            const data = await getAssignedSubjects();

            setSubjects(data);

            setFilteredSubjects(data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to load subjects.");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h4>Loading Subjects...</h4>;

    }

    if (error) {

        return <h4>{error}</h4>;

    }

    return (

        <div className="subjects-page">

            <div className="subjects-header">

                <h2>

                    My Subjects

                </h2>

                <p>

                    View and manage your assigned subjects.

                </p>

            </div>

            <SubjectStatistics

                subjects={subjects}

            />

            <SubjectFilter

                subjects={subjects}

                setFilteredSubjects={setFilteredSubjects}

            />

            <SubjectTable

                subjects={filteredSubjects}

            />

        </div>

    );

}