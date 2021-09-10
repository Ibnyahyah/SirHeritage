import { Link } from 'react-router-dom';
import { Footer } from './Footer';

import classes from './SignAndProfile.module.css';

function SignIn(){
    return(
        <div>
            <div className={classes.formContainer}>
                <div style={{textAlign:'center', marginTop:'50px'}}>
                    <Link to="/">
                        <img src="./logo5.png" alt="logo" width="100" height="100" />
                    </Link>
                </div>
                <form className={classes.form}>
                    <h1 className={classes.header}>Sign In</h1>
                    <div className={classes.inputDiv}>
                        <input type="email" className={classes.input} placeholder="Enter your Register E-mail" required/>
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="password" className={classes.input} placeholder="Enter Your Password" required/>
                    </div>
                    <div className={classes.remember}>
                        <div className={classes.check}>
                            <input type="checkbox"/>
                            <p className={classes.checkP}>Remember me</p>
                        </div>
                        <Link to="/forgetpassword">Forgot your password?</Link>
                    </div>
                    <div className="form-btn">
                        <button className={classes.button}>Sign In</button>
                    </div>
                </form>
                <div style={{textAlign:'center', marginTop:'50px'}}>
                    <p><Link to="/sign-up">Create an account </Link>To Use SirHeritage Shop!</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignIn;