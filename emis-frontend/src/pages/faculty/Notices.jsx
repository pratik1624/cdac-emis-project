import { useEffect, useState } from "react";

import { getFacultyNotices } from "../../api/facultyApi";

import NoticeCard from "../../components/facultyComponent/notices/NoticeCard";

import "../../styles/facultyStyles/notices.css";

export default function Notices() {

    const [notices, setNotices] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadNotices();

    }, []);

    const loadNotices = async () => {

        try {

            const data = await getFacultyNotices();

            setNotices(data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h4>Loading...</h4>;

    }

    return (

        <div className="container-fluid">

            <h2 className="mb-4">

                College Notices

            </h2>

            {

                notices.map((notice)=>(

                    <NoticeCard

                        key={notice.id}

                        notice={notice}

                    />

                ))

            }

        </div>

    );

}