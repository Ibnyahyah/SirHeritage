import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

import classes from './SignAndProfile.module.css';

function SignUp(){
    const [inputName, setInputName ] = useState("");
    const [inputMail, setInputMail ] = useState("");
    const [inputPass, setInputPass ] = useState("");
    const [inputComPass, setInputComPass ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputName, inputMail, inputPass, inputComPass);
    }

    return(
        <div>
            <div className={classes.formContainer}>
                <div style={{textAlign:'center', marginTop:'0'}}>
                    <Link to="/">
                        <img src="./logo5.png" alt="logo" width="100" height="100" />
                    </Link>
                </div>
                <form className={classes.form}>
                    <h1 className={classes.header}>Sign Up</h1>
                    <div className={classes.inputDiv}>
                        <input type="text" 
                            className={classes.input}
                            placeholder="Enter Full-Name"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            required/>
                            {inputName.length < 8 ? (
                                <div style={{color:'red'}}>Name must be atleast 8 Character</div>
                            ) : null}
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="email"
                            className={classes.input}
                            placeholder="Enter your Register E-mail"
                            value={inputMail}
                            onChange={(e) => setInputMail(e.target.value)}
                            required/>
                            {inputMail.length < 8 ? (
                                <div style={{color:'red'}}>Your Mail must be atleast 8 Character</div>
                            ) : null}
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="password"
                            className={classes.input}
                            placeholder="Enter Your Password"
                            value={inputPass}
                            onChange={(e) => setInputPass(e.target.value)}
                            required/>
                            {inputPass.length < 8 ?(
                                <div style={{color:'red'}}>Password must be atleast 8 character</div>
                            ) : null}
                    </div>
                    <div className={classes.inputDiv}>
                        <input type="password"
                            className={classes.input}
                            placeholder="Confirm Password"
                            value={inputComPass}
                            onChange={(e) => setInputComPass(e.target.value)}
                            required/>
                            { inputComPass !== inputPass ? (
                                <div style={{color:'red'}}>PassWord must match comfirm password</div>
                            ) : null}
                    </div>
                    <div className={classes.check} style={{margin:'13px'}}>
                        <input type="checkbox"/>
                        <p className={classes.checkP}>Acccept our <Link to="#">terms and condition</Link></p>
                    </div>
                    <div className="form-btn">
                        <button className={classes.button}
                            onClick={handleSubmit}
                            disabled={inputPass.length < 8}
                        >Sign up</button>
                    </div>
                </form>
                <div style={{textAlign:'center', marginTop:'5px'}}>
                    <p>Already have an account? <Link to="/sign-in">Sign-in</Link></p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignUp;