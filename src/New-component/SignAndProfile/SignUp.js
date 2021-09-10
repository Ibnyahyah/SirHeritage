import { Link } from 'react-router-dom';
import { Footer } from './Footer';

import classes from './SignAndProfile.module.css';

function SignUp(){
    return(
        <div>
            <div className={classes.formContainer}>
                <div style={{textAlign:'center', marginTop:'23px'}}>
                    <Link to="/">
                        <img src="./logo5.png" alt="logo" width="100" height="100" />
                    </Link>
                </div>
                <form className={classes.form}>
                    <h1 className={classes.header}>Sign Up</h1>
                    <div className={classes.inputDiv}>
                        <input type="text" className={classes.input} placeholder="Enter Full-Name" required/>
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="email" className={classes.input} placeholder="Enter your Register E-mail" required/>
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="password" className={classes.input} placeholder="Enter Your Password" required/>
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="password" className={classes.input} placeholder="Comfirm Password" required/>
                    </div>
                    <div className={classes.check} style={{margin:'13px'}}>
                        <input type="checkbox"/>
                        <p className={classes.checkP}>Acccept our <Link to="#">terms and condition</Link></p>
                    </div>
                    <div className="form-btn">
                        <button className={classes.button}>Sign up</button>
                    </div>
                </form>
                <div style={{textAlign:'center', marginTop:'50px'}}>
                    <p>Already have an account? <Link to="/sign-in">Sign-in</Link></p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignUp;