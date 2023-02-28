import {React, useState} from "react";
import './sign.css'

const SignUp = () => {

    const [rotate, setRotate] = useState(false);

    return <div className={rotate ? ' forms rotated' : 'forms'}>
        <div className='signup-form'>

            <h1 className="title-form">Sign up</h1>
            <div className="container-form">
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                </div>

                <div className="buttons">
                    <button className="button-form" onClick={() => { alert('HOOO ba caa nu e gata') }}> Sign up</button>
                    <p className="signup-text" onClick={() => setRotate(true)}>Already have an account? <span className="log-text">Log in!</span></p>
                </div>
            </div>
        </div>
        <div className="login-form">

            <h1 className="title-form">Log in</h1>
            <div className="container-login">
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                </div>

                <div className="buttons">
                    <button className="button-form" onClick={() => { alert('HOOO ba caa nu e gata') }}> Log In</button>
                    <p className="signup-text">Make an <span className="log-text" onClick={() => setRotate(false)}>account</span>.</p>
                </div>
            </div>
        </div>
    </div>

}

export default SignUp