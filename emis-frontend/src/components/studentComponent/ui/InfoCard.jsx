export default function InfoCard({

    title,

    subtitle,

    children

}) {

    return (

        <div className="app-card info-card">

            <div className="info-card-header">

                <h4 className="info-card-title">

                    {title}

                </h4>

                {

                    subtitle &&

                    <p className="info-card-subtitle">

                        {subtitle}

                    </p>

                }

            </div>

            <div className="info-card-body">

                {children}

            </div>

        </div>

    );

}