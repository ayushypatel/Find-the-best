import React, { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errors, setErrors] = useState({
    userName: "",
    Password: "",
    repeatPassword: "",
    email: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!event.target?.username?.value) {
      newErrors.userName = "Please enter a username.";
    }
    setErrors(newErrors);
  };
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
          <h2 className='welcome-txt'>Register Yourself</h2>
		  <h3 className='welcome-back-signup'>Welcome! Please enter your details</h3>
          <form onSubmit={handleSubmit} className="form-container-login">
            <input
              className="input-fields"
              type="text"
              placeholder="Username"
            />
            {errors.userName && <p className="error-message">required</p>}
            <input
              className="input-fields"
              type="password"
              placeholder="Password"
            />
            {/* <input
              className="input-fields"
              type="password"
              placeholder="Repeat Password"
            />
            <input
              className="input-fields"
              type="email"
              placeholder="Email Address"
            /> */}
            <Button className="login-btn" type="submit">
              Sign Up
            </Button>
          </form>
          <p className="mt-20 ">
            already a user?{" "}
            <Link style={{ color: "white", fontWeight: "600" }} to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="image-container col-md-6">
          <div className="centered-text">
            <p className="craving-smthing">Craving Something ?</p>
            <p className="lets-get-you">Let's get you started !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
