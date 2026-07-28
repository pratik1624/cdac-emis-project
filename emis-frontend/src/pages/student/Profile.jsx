import { useEffect, useState } from "react";
import { getStudentProfile } from "../../api/studentApi";

export default function Profile() {

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const data = await getStudentProfile();
                setStudent(data);

            } catch (err) {

                console.error(err);
                setError("Unable to load profile.");

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    if (loading) {
        return <h4>Loading Profile...</h4>;
    }

    if (error) {
        return <h4>{error}</h4>;
    }

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-lg-8">

                    <div className="custom-card p-4">

                        <h3 className="mb-4">Student Profile</h3>

                        <table className="table">

                            <tbody>

                                <tr>
                                    <th>First Name</th>
                                    <td>{student.firstName}</td>
                                </tr>

                                <tr>
                                    <th>Last Name</th>
                                    <td>{student.lastName}</td>
                                </tr>

                                <tr>
                                    <th>Roll Number</th>
                                    <td>{student.rollNumber}</td>
                                </tr>

                                <tr>
                                    <th>Email</th>
                                    <td>{student.email}</td>
                                </tr>

                                <tr>
                                    <th>Phone</th>
                                    <td>{student.phone}</td>
                                </tr>

                                <tr>
                                    <th>Gender</th>
                                    <td>{student.gender}</td>
                                </tr>

                                <tr>
                                    <th>Department</th>
                                    <td>{student.department}</td>
                                </tr>

                                <tr>
                                    <th>Semester</th>
                                    <td>{student.semester}</td>
                                </tr>

                                <tr>
                                    <th>Date of Birth</th>
                                    <td>{student.dob}</td>
                                </tr>

                                <tr>
                                    <th>Address</th>
                                    <td>{student.address}</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}