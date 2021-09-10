import classes from './SignAndProfile.module.css';
import { Link } from 'react-router-dom';

export function ForgetPassword(){
    return(
        <div className={classes.formContainer} style={{height: '95vh'}}>
            <form className={classes.form} style={{marginTop:'100px'}}>
                    <h1 className={classes.header}>Recover Password</h1>
                    <div className={classes.inputDiv}>
                        <input type="email" className={classes.input} placeholder="Enter your Register E-mail Address" required/>
                        <Link to="#">Send code</Link>
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="text" className={classes.input} placeholder="Enter Your Password" required/>
                    </div>
                    <div className="form-btn">
                        <button className={classes.button}>Submit</button>
                    </div>
                </form>
        </div>
    )
}