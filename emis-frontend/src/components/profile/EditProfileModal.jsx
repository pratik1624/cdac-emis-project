import { useEffect, useState } from "react";

export default function EditProfileModal({
    show,
    onClose,
    student,
    onSave
}) {

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {

        if (student) {

            setFormData({
                email: student.email || "",
                phone: student.phone || "",
                address: student.address || ""
            });

        }

    }, [student]);

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

    if (!show) return null;

    return (

        <div
            className="modal fade show"
            style={{
                display: "block",
                background: "rgba(0,0,0,.5)"
            }}
        >

            <div className="modal-dialog modal-lg modal-dialog-centered">

                <div className="modal-content rounded-4">

                    <div className="modal-header">

                        <h4>Edit Profile</h4>

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
                                        className="form-control"
                                        value={student.firstName}
                                        disabled
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Last Name
                                    </label>

                                    <input
                                        className="form-control"
                                        value={student.lastName}
                                        disabled
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">
                                        Mobile
                                    </label>

                                    <input
                                        name="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-12 mb-3">

                                    <label className="form-label">
                                        Address
                                    </label>

                                    <textarea
                                        rows="3"
                                        name="address"
                                        className="form-control"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-6">

                                    <label className="form-label">
                                        Department
                                    </label>

                                    <input
                                        className="form-control"
                                        value={student.department}
                                        disabled
                                    />

                                </div>

                                <div className="col-md-6">

                                    <label className="form-label">
                                        Semester
                                    </label>

                                    <input
                                        className="form-control"
                                        value={student.semester}
                                        disabled
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