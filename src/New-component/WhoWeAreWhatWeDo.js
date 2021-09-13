import { Link } from 'react-router-dom';

function WhoWeAre(){
    return(
        <div className="WhoWeAre">
            <h1>Who We Are And What We Do.</h1>
            <div className="WYK-content">
                <p>We are <i>SirHeritage</i>. A fashion builder
                 we deal in making most fashioable clothes which satisfy your desire.
                 <b>"Try Us today and You gonna partonize Us again"</b>. we are 24hours 
                 at your service anyday, anytime, anypart of the world.</p>
                 <p>We also train young fashionist to be the next fashion <b>boss</b> of their era.
                    our students have fully assist to both practical and theory.
                    Our theory class start from 9am to 12pm, while practical start from 1pm to 6pm.
                    Our student Only have to come from monday --- friday. <Link to="#contact">Contact Us for more info</Link>
                 </p>
            </div>
        </div>
    )
}
export default WhoWeAre;