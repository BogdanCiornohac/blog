import React from "react";
import SignUp from "./SignUp/SignUp";
import './auth.css';

const Auth = () => {

    return (
        <div className="container">
            <div className="spacer layer1"></div>
            <div className='title'>
                <h1>Feel Reviewed</h1>
            </div>

            <div className='card-area'>
                <SignUp />
            </div>
        </div>
    );
}

export default Auth;