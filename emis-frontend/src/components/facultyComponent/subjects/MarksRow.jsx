export default function MarksRow({

    student,

    index,

    marks,

    setMarks

}) {

    const handleChange = (field,value)=>{

        const updated=[...marks];

        updated[index][field]=value;

        setMarks(updated);

    };

    return(

        <tr>

            <td>

                {student.rollNumber}

            </td>

            <td>

                {student.studentName}

            </td>

            <td>

                <input

                    type="number"

                    className="form-control"

                    value={student.obtainedMarks}

                    onChange={(e)=>

                        handleChange(

                            "obtainedMarks",

                            e.target.value

                        )

                    }

                />

            </td>

            <td>

                <input

                    type="number"

                    className="form-control"

                    value={student.totalMarks}

                    onChange={(e)=>

                        handleChange(

                            "totalMarks",

                            e.target.value

                        )

                    }

                />

            </td>

            <td>

                <span className="badge bg-primary">

                    {student.grade}

                </span>

            </td>

        </tr>

    );

}