import { useEffect, useState } from "react";

export default function EditProfileModal({

    show,

    faculty,

    onClose,

    onSave

}) {

    const [formData, setFormData] = useState({

        firstName: "",

        lastName: "",

        phone: "",

        designation: ""

    });

    useEffect(() => {

        if (faculty) {

            setFormData({

                firstName: faculty.firstName || "",

                lastName: faculty.lastName || "",

                phone: faculty.phone || "",

                designation: faculty.designation || ""

            });

        }

    }, [faculty]);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(formData);

    };

    if (!show) {

        return null;

    }

    return (

        <div className="modal fade show d-block">

            <div className="modal-dialog modal-lg modal-dialog-centered">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title">

                            Edit Profile

                        </h5>

                        <button

                            className="btn-close"

                            onClick={onClose}

                        />

                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="modal-body">

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        First Name

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="firstName"

                                        value={formData.firstName}

                                        onChange={handleChange}

                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        Last Name

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="lastName"

                                        value={formData.lastName}

                                        onChange={handleChange}

                                    />

                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        Phone

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="phone"

                                        value={formData.phone}

                                        onChange={handleChange}

                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        Designation

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="designation"

                                        value={formData.designation}

                                        onChange={handleChange}

                                    />

                                </div>

                            </div>

                        </div>

                        <div className="modal-footer">

                            <button

                                type="button"

                                className="btn btn-secondary"

                                onClick={onClose}

                            >

                                Cancel

                            </button>

                            <button

                                type="submit"

                                className="btn btn-success"

                            >

                                Save Changes

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}