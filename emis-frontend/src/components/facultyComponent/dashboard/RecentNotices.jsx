import { useEffect, useState } from "react";

import { getNotices } from "../../../api/facultyApi";

import {
    FaBullhorn,
    FaCalendarAlt
} from "react-icons/fa";

export default function RecentNotices() {

    const [notices, setNotices] = useState([]);

    useEffect(() => {

        loadNotices();

    }, []);

    const loadNotices = async () => {

        try {

            const data = await getNotices();

            setNotices(data);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="dashboard-card-section">

            <div className="dashboard-section-header">

                <h4>

                    Recent Notices

                </h4>

                <p>

                    Latest department announcements

                </p>

            </div>

            {

                notices.length === 0 ?

                (

                    <div className="empty-state">

                        No notices available.

                    </div>

                )

                :

                (

                    <div className="notice-list">

                        {

                            notices.map((notice) => (

                                <div
                                    key={notice.id}
                                    className="notice-item"
                                >

                                    <div className="notice-icon">

                                        <FaBullhorn />

                                    </div>

                                    <div className="notice-content">

                                        <h6>

                                            {notice.title}

                                        </h6>

                                        <p>

                                            {notice.description}

                                        </p>

                                        <small>

                                            <FaCalendarAlt className="me-2" />

                                            {notice.createdAt}

                                        </small>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}