import { useEffect, useState } from "react";

import { getStudentNotices } from "../../api/noticeApi";

import NoticeSummaryCards from "../../components/studentComponent/notices/NoticeSummaryCards";
import NoticeList from "../../components/studentComponent/notices/NoticeList";
import ImportantNotice from "../../components/studentComponent/notices/ImportantNotice";
import NoticeArchive from "../../components/studentComponent/notices/NoticeArchive";

import "../../styles/notices.css";

export default function Notices() {

    const [notices, setNotices] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const fetchNotices = async () => {

            try {

                const data = await getStudentNotices();

                setNotices(data);

            } catch (err) {

                console.error(err);

                setError("Unable to load notices.");

            } finally {

                setLoading(false);

            }

        };

        fetchNotices();

    }, []);

    if (loading) {

        return <h4>Loading Notices...</h4>;

    }

    if (error) {

        return <h4>{error}</h4>;

    }

    return (

        <div className="container-fluid">

            {/* Header */}

            <div className="notices-header">

                <h2 className="page-title">

                    Notices

                </h2>

                <p className="page-subtitle">

                    Stay updated with the latest announcements from your college.

                </p>

            </div>

            {/* Summary */}

            <NoticeSummaryCards notices={notices} />

            {/* Main Section */}

            <div className="notice-layout">

                <div className="notice-main">

                    <NoticeList notices={notices} />

                </div>

                <div className="notice-side">

                    <ImportantNotice notices={notices} />

                    <NoticeArchive notices={notices} />

                </div>

            </div>

        </div>

    );

}