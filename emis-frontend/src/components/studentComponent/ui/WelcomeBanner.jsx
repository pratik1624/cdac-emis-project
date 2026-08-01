export default function WelcomeBanner({ profile }) {

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

                {
                    profile
                        ? `${profile.firstName} ${profile.lastName}`
                        : "Student"
                }

            </h4>

            <p>

                Welcome back to EMIS Student Portal

            </p>

        </div>

    );

}