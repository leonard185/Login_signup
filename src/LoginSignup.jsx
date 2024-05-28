import React, { useState } from "react";
import './Login.css'

import Email_icon from './email.png'
import password_icon from './password.png'
import person_icon from './person.png'

const LoginSignup = () => {
 
const [action,setAction] =useState ("Login")    
    return (
        <div className="container">
            <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                {  action === "Login"? <div></div>: 
                <div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder="Name" />
                </div>}
              
                <div className="input">
                <img src={Email_icon} alt="" />
                <input type="text" placeholder="Email" />
                </div>
                <div className="input">
                <img src={password_icon} alt="" />
                <input type="text" placeholder="Password" />
                </div>
            </div>
            {action ==="Sign up"?<div> </div>:<div className="forgot-password"> Lost Password?
            <span>Click Here!</span>
            </div>}
            
            <div className="submit-container">
                <div className={action === "Login"?"submit gray":"submit"} 
                onClick={() =>{setAction ("Sign up")}}>Sign Up</div>
                <div className={action === "Sign up"?"submit gray":"submit"}
               onClick={() =>{setAction ("Login")}} >Login</div>
            </div>

        </div> 
    )
}

export default LoginSignup