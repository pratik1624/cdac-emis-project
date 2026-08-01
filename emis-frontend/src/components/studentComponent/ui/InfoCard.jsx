export default function InfoCard({

    title,

    children

}){

    return(

        <div className="info-card">

            <h5>

                {title}

            </h5>

            <hr/>

            {children}

        </div>

    );

}