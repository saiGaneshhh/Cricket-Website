import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    // let imageStyle = {

    //     backgroundImage:
    //     'url("https://img.freepik.com/premium-photo/wet-asphalt-reflection-neon-lights_129911-2443.jpg")',
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   };
    return (
        <div className='image' >
            {/* <ReactPlayer url={'https://www.shutterstock.com/shutterstock/videos/1089381035/preview/stock-footage-smoke-light-yellow-lines-in-black-background-after-fire-fog-very-beautiful-smoke-lines-motion-to.webm'} controls={true}/> */}
            {/* <video className="Video-player" loop autoPlay muted={true}>
                <source src='https://www.shutterstock.com/shutterstock/videos/1089381035/preview/stock-footage-smoke-light-yellow-lines-in-black-background-after-fire-fog-very-beautiful-smoke-lines-motion-to.webm' type="video/mp4" />
            </video> */}
            <video autoPlay loop muted>
                <source src='https://static.videezy.com/system/resources/previews/000/046/075/original/Smoke_transition_longclip_high_quality_4k.mp4' type='video/mp4'/>
            </video>
            <div className='head'>
                <h1 style={{ fontFamily: "Verdana, Arial, Helvetica, sans-serif", color: 'white', paddingTop: '20px' }}>CRICKET WORLD 🏏</h1>
            </div>
            <div className='navbar'>
                {/* <div>
                        <h2>Welcome</h2>
                </div> */}

                <div className='home'>
                    <Link to="/" className='li1'>Home</Link>
                    <Link to="/About" className='li2'>About</Link>
                </div>





                <div className='logins'>
                    <Link to="/LogIn" className='ab'>LogIn</Link>
                    <Link to="/SignIn" className='cd' >SignIn</Link>
                </div>






            </div>
        </div>
    )
}
