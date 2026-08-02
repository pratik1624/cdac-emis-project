import { useEffect, useState } from "react";

import { getDepartmentStudents } from "../../api/facultyApi";

import StudentTable from "../../components/facultyComponent/students/StudentTable";

import "../../styles/facultyStyles/students.css";

export default function Students() {

    const [semester, setSemester] = useState(1);

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadStudents();

    }, [semester]);

    const loadStudents = async () => {

        try {

            const data = await getDepartmentStudents(semester);

            setStudents(data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="container-fluid">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>

                    Department Students

                </h2>

                <select

                    className="form-select w-auto"

                    value={semester}

                    onChange={(e)=>setSemester(e.target.value)}

                >

                    {[1,2,3,4,5,6,7,8].map((sem)=>(

                        <option

                            key={sem}

                            value={sem}

                        >

                            Semester {sem}

                        </option>

                    ))}

                </select>

            </div>

            {

                loading ?

                <h5>Loading...</h5>

                :

                <StudentTable students={students} />

            }

        </div>

    );

}