import {
    FaArchive,
    FaFolderOpen,
    FaArrowRight
} from "react-icons/fa";

export default function NoticeArchive({ notices }) {

    const archiveMap = {};

    notices.forEach((notice) => {

        const date = new Date(notice.publishDate);

        const month = date.toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });

        archiveMap[month] = (archiveMap[month] || 0) + 1;

    });

    const archives = Object.entries(archiveMap).map(
        ([month, count]) => ({
            month,
            notices: count
        })
    );

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

                    archives.length > 0 ? (

                        archives.map((archive) => (

                            <div
                                key={archive.month}
                                className="archive-item"
                            >

                                <div className="archive-left">

                                    <FaFolderOpen />

                                    <div>

                                        <h6>

                                            {archive.month}

                                        </h6>

                                        <small>

                                            {archive.notices} Notice{archive.notices > 1 ? "s" : ""}

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

                    ) : (

                        <p className="text-center text-secondary mb-0">

                            No archived notices available.

                        </p>

                    )

                }

            </div>

        </div>

    );

}