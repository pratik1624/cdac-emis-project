export default function SecurityCard(){

    return(

        <div className="card shadow-sm border-0 mb-4">

            <div className="card-header bg-success text-white">

                <h5 className="mb-0">

                    Security

                </h5>

            </div>

            <div className="card-body">

                <p className="text-muted">

                    Password is managed securely.

                </p>

                <button

                    className="btn btn-outline-success"

                    disabled

                >

                    Change Password

                </button>

            </div>

        </div>

    );

}