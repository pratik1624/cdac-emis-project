import { useEffect, useState } from "react";

export default function EditProfileModal({
    show,
    faculty,
    onClose,
    onSave
}) {

    const [formData, setFormData] = useState({

        email: "",

        phone: ""

    });

    useEffect(() => {

        if (faculty) {

            setFormData({

                email: faculty.email || "",

                phone: faculty.phone || ""

            });

        }

    }, [faculty]);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = () => {

        onSave(formData);

    };

    if (!show) return null;

    return (

        <div
            className="modal fade show d-block"
            style={{ background: "rgba(0,0,0,.5)" }}
        >

            <div className="modal-dialog modal-dialog-centered">

                <div className="modal-content border-0 rounded-4">

                    <div className="modal-header">

                        <h5 className="modal-title">

                            Edit Profile

                        </h5>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        ></button>

                    </div>

                    <div className="modal-body">

                        <div className="mb-3">

                            <label className="form-label">

                                Email

                            </label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

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

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-secondary"
                            onClick={onClose}
                        >

                            Cancel

                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >

                            Save Changes

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}