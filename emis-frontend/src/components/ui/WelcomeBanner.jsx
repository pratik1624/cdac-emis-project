import { useAuth } from "../../context/AuthContext";

export default function WelcomeBanner() {

    const { user } = useAuth();

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12)
        greeting = "Good Morning";

    else if (hour < 18)
        greeting = "Good Afternoon";

    return (

        <div className="welcome-banner">

            <h2>

                {greeting} 👋

            </h2>

            <h4>

                {user?.name}

            </h4>

            <p>

                Welcome back to EMIS Student Portal

            </p>

        </div>

    );

}