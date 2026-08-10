import { FaChartBar } from "react-icons/fa";

export default function MarksDetails({ results }) {

    return (

        <div className="details-card">

            <div className="details-card-body">

                <h5 className="details-card-title">

                    <FaChartBar className="details-title-icon" />

                    Result Summary

                </h5>

                <div className="table-responsive">

                    <table className="table details-table align-middle">

                        <thead>

                            <tr>

                                <th>

                                    Subject

                                </th>

                                <th>

                                    Obtained Marks

                                </th>

                                <th>

                                    Total Marks

                                </th>

                                <th>

                                    Grade

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                results.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center"
                                        >

                                            No results available.

                                        </td>

                                    </tr>

                                )

                                :

                                (

                                    results.map((result, index) => (

                                        <tr key={index}>

                                            <td>

                                                {result.subjectName}

                                            </td>

                                            <td>

                                                {result.obtainedMarks}

                                            </td>

                                            <td>

                                                {result.totalMarks}

                                            </td>

                                            <td>

                                                <span
                                                    className={`grade-badge ${result.grade.toLowerCase()}`}
                                                >

                                                    {result.grade}

                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}