import React from "react";
import './LoginSignup.css';
import Email from "../../images/email.svg";
import Password from "../../images/password.svg";
import User from "../../images/profilePic.svg";

function LoginSignup(){
  const [isUserRegistered, setUser] = React.useState(true);

  function handleChange(){
    setUser(!isUserRegistered);
  }
  return (
    !isUserRegistered ? 
    <div className="outer-container">
      <div className="container">
        <h1>REGISTER</h1>
        <div className="input">
          <img src={User}></img>
          <input type="text" name="username" placeholder="Username"></input>
        </div>
        <div className="input">
          <img src={Email}></img>
          <input type="text" name="email" placeholder="Email"></input>        
        </div>
        <div className="input">
          <img src={Password}></img>
          <input type="text" name="password" placeholder="Password"></input>
        </div>
        <button className="registerButton">Register</button>
        <p>Already registered? <a onClick={handleChange}>LOGIN</a></p>
      </div>
    </div> : 
    <div className="outer-container">
      <div className="container">
        <h1>LOGIN</h1>
        <div className="input">
          <img src={Email}></img>
          <input type="text" name="email" placeholder="Email"></input>
        </div>
        <div className="input">
          <img src={Password}></img>
          <input type="text" name="password" placeholder="Password"></input>
        </div>
        <div className="forgetPassword">
          <a>Forget Password?</a>
        </div>
        <button className="loginButton">Login</button>
        <button onClick={handleChange} className="registerButton">Register</button>
      </div>
    </div>
  )
}
export default LoginSignup;