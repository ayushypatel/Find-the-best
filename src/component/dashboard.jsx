import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="full-page-bg">
      <div class="content">
        <h2 className="welcome-txt">Welcome to</h2>
        <h1 className="find-the-best">
          FIND THE <span className="best-txt">BEST</span>
        </h1>
        <Button className="custom-login-btn"><Link to="register" style={{color: "inherit",textDecoration:"none"}}>SIGN-UP</Link></Button>
      </div>
    </div>
    // <div className="bg-opacity">
    //             <div className="content">
    //                 <div className='container-wrap'>
    //                     <h1 className='find-the-best'>
    //                         <span className="hover-effect">F</span><span className="hover-effect">I</span><span className="hover-effect">N</span><span className="hover-effect">D</span>  <span className="hover-effect">T</span><span className="hover-effect">H</span><span className="hover-effect">E</span> <span className="hover-effect">B</span><span className="hover-effect">E</span><span className="hover-effect">S</span><span className="hover-effect">T</span>
    //                     </h1>
    //                     <div className='content-bottom'>
    //                         Best food restaurant in <span className='indore'>Indore</span>. <br />
    //                         we'll find you the best.
    //                     </div>
    //                 </div>
    //                 <div className='wrapper-content'>
    //                     <h3 className='card-content'>Discover, taste, and explore with ease! Our app is your go-to destination for finding the best dishes in Indore. Uncover renowned specialties, locate restaurants and cafes effortlessly, and engage directly with owners to learn about their signature offerings. Join us in redefining how you experience and enjoy exceptional dining.</h3>

    //                     <button  class="fill-left-to-right"><Link to="register" style={{color:"white",textDecoration:"none"}}>REGISTER</Link></button>
    //                     <button class="fill-left-to-right"><Link to="login" style={{color:"white",textDecoration:"none"}}>LOGIN</Link></button>
    //                 </div>
    //             </div>

    //         </div>
  );
};

export default Dashboard;
