import { FaBullhorn } from "react-icons/fa";

export default function NoticeCard({
    title,
    date,
    description
}) {

    return (

        <div className="notice-card">

            <div className="notice-icon">
                <FaBullhorn />
            </div>

            <div className="notice-content">

                <h6>{title}</h6>

                <small>{date}</small>

                <p>{description}</p>

            </div>

        </div>

    );

}