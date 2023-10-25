import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Navbar.css'


function LoginForm() {
    let imageStyle = {
 
        backgroundImage:
        'url("https://img.freepik.com/premium-photo/wet-asphalt-reflection-neon-lights_129911-2443.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
       paddingTop:'10px',
       paddingBottom:'150px'
      };
      
    return (
        <div style={imageStyle}>
          
            <h2 style={{ textAlign: "center", marginTop: "10px", marginBottom: "50px", color:"white" }}>Login Form</h2>

            <form className='video'>
            {/* <video autoPlay loop muted>
                <source src='https://static.videezy.com/system/resources/previews/000/046/075/original/Smoke_transition_longclip_high_quality_4k.mp4' type='video/mp4'/>
            </video> */}
                <div class="form-outline mb-4" style={{width:'300px'}}>
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1" style={{color:'white'}}>Email address</label>
                </div>

                <div class="form-outline mb-4"style={{width:'300px'}}>
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2" style={{color:'white'}}>Password</label>
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                            <label class="form-check-label" for="form2Example34"style={{width:'120px'}}> Remember me </label>
                        </div>
                    </div>

                    <div class="col">

                        <a href='#' >Forgot password?</a>
                    </div>
                </div>


                {/* <button type="submit" class="btn btn-primary btn-block mb-4" style={{width:'300px'}}>Sign in</button> */}
                {/* <button type="button" class="btn btn-outline-primary"style={{width:'300px', color:'white'}}>Log-In</button> */}
                {/* <button type="button" class="btn btn-outline-success"style={{width:'300px', color:'white'}}>Success</button> */}
                <button type="button" class="btn btn-primary" style={{width:'300px', color:'white'}}>Login</button>

                <div class="text-center">
                    <p style={{color:'white'}}>Not a member? <a href="#!"style={{color:'white'}}>Register</a></p>
                    
                </div>
            </form>

            <ToastContainer />
        </div>
    );
}

export default LoginForm;


