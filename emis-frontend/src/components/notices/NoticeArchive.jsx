import {
    FaArchive,
    FaFolderOpen,
    FaArrowRight
} from "react-icons/fa";

export default function NoticeArchive() {

    const archives = [

        {
            month: "July 2026",
            notices: 12
        },

        {
            month: "June 2026",
            notices: 18
        },

        {
            month: "May 2026",
            notices: 15
        },

        {
            month: "April 2026",
            notices: 10
        }

    ];

    return (

        <div className="card app-card archive-card mt-4">

            <div className="card-body">

                <div className="archive-header">

                    <FaArchive className="archive-icon" />

                    <h5 className="mb-0">

                        Notice Archive

                    </h5>

                </div>

                <hr />

                {

                    archives.map((archive, index) => (

                        <div
                            key={index}
                            className="archive-item"
                        >

                            <div className="archive-left">

                                <FaFolderOpen />

                                <div>

                                    <h6>

                                        {archive.month}

                                    </h6>

                                    <small>

                                        {archive.notices} Notices

                                    </small>

                                </div>

                            </div>

                            <button
                                className="btn btn-sm btn-outline-primary"
                            >

                                View

                                <FaArrowRight className="ms-1" />

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}