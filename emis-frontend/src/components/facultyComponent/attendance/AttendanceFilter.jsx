export default function AttendanceFilter({

    filter,

    setFilter,

    onLoad

}){

    return(

        <div className="card shadow-sm border-0 rounded-4 mb-4">

            <div className="card-body">

                <div className="row">

                    <div className="col-md-3">

                        <select

                            className="form-select"

                            value={filter.semester}

                            onChange={(e)=>

                                setFilter({

                                    ...filter,

                                    semester:e.target.value

                                })

                            }

                        >

                            <option value="">

                                Semester

                            </option>

                            {

                                [1,2,3,4,5,6,7,8].map(

                                    sem=>

                                    <option

                                        key={sem}

                                        value={sem}

                                    >

                                        Semester {sem}

                                    </option>

                                )

                            }

                        </select>

                    </div>

                    <div className="col-md-3">

                        <input

                            type="number"

                            placeholder="Subject Id"

                            className="form-control"

                            value={filter.subjectId}

                            onChange={(e)=>

                                setFilter({

                                    ...filter,

                                    subjectId:e.target.value

                                })

                            }

                        />

                    </div>

                    <div className="col-md-3">

                        <input

                            type="date"

                            className="form-control"

                            value={filter.attendanceDate}

                            onChange={(e)=>

                                setFilter({

                                    ...filter,

                                    attendanceDate:e.target.value

                                })

                            }

                        />

                    </div>

                    <div className="col-md-3">

                        <button

                            className="btn btn-primary w-100"

                            onClick={onLoad}

                        >

                            Load Students

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}