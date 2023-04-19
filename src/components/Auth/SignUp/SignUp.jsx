import { React, useState } from "react";
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import './sign.css'

const SignUp = () => {

    const [rotate, setRotate] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return <div className={rotate ? ' forms rotated' : 'forms'}>
        <div className='signup-form'>

            <h1 className="title-form">Sign up</h1>
            <div className="container-form">
                <div className="inputs">
                    <input type="text" placeholder="Username" className="input-style"/>
                    <input type="email" placeholder="Email" className="input-style" />
                    <input type={showPassword ? 'text' : 'password'} placeholder="Password"  className="input-style"/>
                    <div onClick={() => setShowPassword(!showPassword)} className='eye-container'> {showPassword ? <RxEyeClosed className="icon-form"/> : <RxEyeOpen className="icon-form"/>}</div>
                </div>

                <div className="buttons">
                    <button className="button-form" > Sign up</button>
                    <p className="signup-text" onClick={() => setRotate(true)}>Already have an account? <span className="log-text">Log in!</span></p>
                </div>
            </div>
        </div>
        <div className="login-form">

            <h1 className="title-form">Log in</h1>
            <div className="container-login">
                <div className="inputs" >
                    <input type="text" placeholder="Username" className="input-style" />
                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input-style" />
                    <div onClick={() => setShowPassword(!showPassword)} className='eye-container-login'> {showPassword ? <RxEyeClosed className="icon-form"/> : <RxEyeOpen className="icon-form"/>}</div>
                </div>

                <div className="buttons">
                    <button className="button-form" > Log In</button>
                    <p className="signup-text">Make an <span className="log-text" onClick={() => setRotate(false)}>account</span>.</p>
                </div>
            </div>
        </div>
    </div>

}

export default SignUp