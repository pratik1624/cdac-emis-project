import DashboardCard from "../../components/ui/DashboardCard";
import WelcomeBanner from "../../components/ui/WelcomeBanner";
import InfoCard from "../../components/ui/InfoCard";
import NoticeCard from "../../components/ui/NoticeCard";

import {

    FaClipboardCheck,

    FaChartLine,

    FaMoneyBillWave,

    FaBullhorn

} from "react-icons/fa";

export default function Dashboard(){

    return(

        
          
    <>

        <WelcomeBanner />

        <div className="dashboard-grid">

            <DashboardCard
                title="Attendance"
                value="91%"
                subtitle="Current Attendance"
                icon={<FaClipboardCheck />}
            />

            <DashboardCard
                title="Results"
                value="8.64"
                subtitle="Current CGPA"
                icon={<FaChartLine />}
            />

            <DashboardCard
                title="Fees"
                value="Paid"
                subtitle="Current Status"
                icon={<FaMoneyBillWave />}
            />

            <DashboardCard
                title="Notices"
                value="3"
                subtitle="New Notices"
                icon={<FaBullhorn />}
            />

        </div>

        <div className="info-grid">

            <InfoCard title="Recent Notices">

                <NoticeCard
                    title="Mid Semester Examination"
                    date="15 Aug 2026"
                    description="Mid semester examinations will begin next week."
                />

                <NoticeCard
                    title="Assignment Submission"
                    date="18 Aug 2026"
                    description="Submit your Java assignment before Friday."
                />

                <NoticeCard
                    title="Holiday Notice"
                    date="22 Aug 2026"
                    description="College will remain closed on Independence Day."
                />

            </InfoCard>

            <InfoCard title="Student Information">

                <div className="student-info">

                    <div>
                        <strong>Name</strong>
                        <p>Bhagyesh Akhare</p>
                    </div>

                    <div>
                        <strong>Department</strong>
                        <p>Computer Science Engineering</p>
                    </div>

                    <div>
                        <strong>Semester</strong>
                        <p>6</p>
                    </div>

                    <div>
                        <strong>Email</strong>
                        <p>bhagyesh@example.com</p>
                    </div>

                </div>

            </InfoCard>

        </div>

   


        </>

    );

}