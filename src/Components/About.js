import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './About.css'
import './User.css'

export default function About() {
  let imageStyle = {
 
    backgroundImage:
    'url("https://media.istockphoto.com/id/1442572567/photo/cricket-leather-ball-and-wickets-in-stadium-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=V-hKuRgM2k1p7-AsCJWf9JflW3hJAJW-NCdDarSDGWo=")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop:"20px",
    paddingBottom:"270px"
  };
 
  return (
  
       <div style={imageStyle} >
        <Link to="/About/Bcci" className='bcci'>BCCI</Link>
        <Link to="/About/Icc" className='icc'>ICC</Link>
        <Outlet />
        <p className='para'>
        The ICC is the global governing body for cricket. Representing 108 members, the ICC governs and administrates the game and works with our members to grow the sport. The ICC is also responsible for the staging of all ICC Events.

The ICC presides over the ICC Code of Conduct, playing conditions, the Decision Review System and other ICC regulations. The ICC also appoints all match officials that officiate at all sanctioned international matches. Through the Anti-Corruption Unit it coordinates action against corruption and match fixing.
The International Cricket Council (ICC) is the global governing body of cricket. It was founded as the Imperial Cricket Conference in 1909 by representatives from Australia, England and South Africa. It was renamed as the International Cricket Conference in 1965, and took up its current name in 1987. The ICC has its headquarters in Dubai, United Arab Emirates.

The ICC has 108 member nations currently: 12 Full Members that play Test matches, and 96 Associate Members.[3] The ICC is responsible for the organisation and governance of cricket's major international tournaments, most notably the Cricket World Cup, T20 World Cup, and ICC World Test Championship. It also appoints the umpires and referees that officiate at all sanctioned Test matches, One Day Internationals and Twenty20 Internationals. It promulgates the ICC Code of Conduct, which sets professional standards of discipline for international cricket,[4] and also co-ordinates action against corruption and match-fixing through its Anti-Corruption and Security Unit (ACSU).

The ICC does not control bilateral fixtures between member countries (which include all Test matches), and neither does it govern domestic cricket within member countries. It does not make or alter the laws of the game, which have remained under the governance of the Marylebone Cricket Club since 1788.[5]

The Chairman heads the board of directors and on 26 June 2014, Narayanaswami Srinivasan, the former president of BCCI, was announced as the first chairman of the council.[6] The role of ICC president has become a largely honorary position since the establishment of the chairman role and other changes were made to the ICC constitution in 2014. It has been claimed that the 2014 changes have handed control to the 'Big Three' nations of England, India and Australia.[7] The last ICC president was Zaheer Abbas,[8] who was appointed in June 2015 following the resignation of Mustafa Kamal in April 2015. When the post of ICC president was abolished in April 2016, Shashank Manohar, who replaced Srinivasan in October 2015, became the first independent elected chairman of the ICC.[9]
        </p>
        
      </div>
    
   
  )
}
