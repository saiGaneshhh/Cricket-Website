

import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {

 
  
  let imageStyle = {
 
    backgroundImage:
    'url("https://img.freepik.com/premium-photo/wet-asphalt-reflection-neon-lights_129911-2443.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   paddingTop:'10px',
   paddingBottom:'40px'
  };
  return (
    <div style={imageStyle}>
      <h2 style={{ textAlign: "center", marginTop: "10px", marginBottom: "50px", color:'white'}}>Sign Up</h2>
      
      <form>

        {/* <div class="row mb-4"> */}
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example1" class="form-control" style={{width:'300px'}}/>
              <label class="form-label" for="form3Example1" style={{width:'100px', color:'white'}}>First name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example2" class="form-control"style={{width:'300px'}} />
              <label class="form-label" for="form3Example2" style={{ width:'100px',color:'white'}}>Last name</label>
            </div>
          </div>
        {/* </div> */}


        <div class="form-outline mb-4">
          <input type="email" id="form3Example3" class="form-control" />
          <label class="form-label" for="form3Example3" style={{width:'300px', color:'white'}}>Email address</label>
        </div>


        <div class="form-outline mb-4">
          <input type="password" id="form3Example4" class="form-control" />
          <label class="form-label" for="form3Example4" style={{width:'300px', color:'white'}}>Password</label>
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="form3Example4" class="form-control" />
          <label class="form-label" for="form3Example4" style={{width:'300px', color:'white'}}>Conform Password</label>
        </div>


        <div class="form-check d-flex justify-content-center mb-4">
          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
          <label class="form-check-label" for="form2Example33" style={{color:'white'}}>
            Subscribe to our newsletter
          </label>
        </div>


        <button type="button" class="btn btn-outline-primary"style={{width:'300px', color:'white'}}>Sign-Up</button>


       
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
