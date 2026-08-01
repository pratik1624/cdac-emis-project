import { useState } from "react";

export default function AccountSettingsCard() {

    const [email, setEmail] = useState("student@college.com");
    const [mobile, setMobile] =useState("9876543210");

    const handleSave=()=>{

        alert("Backend integration coming soon.");

    };

    return (

        <div className="card shadow-sm border-0 mb-4">

            <div className="card-header bg-success text-white">

                <h5 className="mb-0">

                    Account Settings

                </h5>

            </div>

            <div className="card-body">

                <div className="mb-3">

                    <label className="form-label">

                        Email

                    </label>

                    <input

                        type="email"

                        className="form-control"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Mobile Number

                    </label>

                    <input

                        className="form-control"

                        value={mobile}

                        onChange={(e)=>setMobile(e.target.value)}

                    />

                </div>

                <button

                    className="btn btn-success"

                    onClick={handleSave}

                >

                    Save Changes

                </button>

            </div>

        </div>

    );

}