import { Link } from 'react-router-dom';
import classes from './SignAndProfile.module.css';

export function Footer(){
    return(
        <div className={classes.footer}>
           <div className={classes.row}>
                <div >
                    <p>&copy;<Link to="/" style={{color:'gray'}}> SirHeritage shop, ng.</Link></p>
                </div>
                <div>
                <Link to="/">
                    <img src="./logo5.png" alt="logo" width="80" height="80" className={classes.imgLogo}/>
                </Link>
                </div>
                <div>
                    <p><Link to="#" style={{color:'gray'}}>Developed | Bn ibn</Link></p>
                </div>
            </div> 
        </div>
    )
}