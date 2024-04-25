import React from 'react';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate("/home");
    }
    return (
        <div className="login-container">
      <div className="row">
        <div className="content-background-login col-md-6">
          <div className="app-name">
            <div className="restro-icon">
              <MdOutlineRestaurantMenu />
            </div>
            <span className="find-the-best-txt"> FIND THE BEST</span>
          </div>
            <h2 className='welcome-txt'>LOGIN</h2>
            <h3 className='welcome-back-signup'>Welcome back! Please enter your details</h3>
            <form onSubmit={handleSubmit}  className="form-container-login"> 
                        <input className='input-fields' type="text" placeholder="Username" />
                       <input className='input-fields' type="password" placeholder="Password" />
                        <button className='login-btn' type="submit">Login</button>
                  </form>
           
          </div>
          <div className="image-container col-md-6">
            <div className="centered-text">
            <p className='craving-smthing'>Find You The Tasty</p>
            <p className='lets-get-you'>Made With Love</p>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Login;
