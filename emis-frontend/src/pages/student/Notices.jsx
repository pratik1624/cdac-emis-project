import NoticeSummaryCards from "../../components/notices/NoticeSummaryCards";
import NoticeList from "../../components/notices/NoticeList";
import ImportantNotice from "../../components/notices/ImportantNotice";
import NoticeArchive from "../../components/notices/NoticeArchive";

import "../../styles/notices.css";

export default function Notices() {

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

            <NoticeSummaryCards />

            {/* Main Section */}

            <div className="notice-layout">

                <div className="notice-main">

                    <NoticeList />

                </div>

                <div className="notice-side">

                    <ImportantNotice />

                    <NoticeArchive />

                </div>

            </div>

        </div>

    );

}