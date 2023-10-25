import React from 'react'
import './User.css'
import Card from 'react-bootstrap/Card';
export default function Icc() {
  return (
    // https://www.sportzcraazy.com/wp-content/uploads/2023/05/icc.jpeg    Chairman : Greg Barclay    A director of Cricket World Cup 2015 and a former board member and chairman of the Northern Districts Cricket Association.
    // https://www.mollerinstitute.com/wp-content/uploads/2020/12/John-W.H-565x565.jpg  Secretary : John Denton    He is a global business leader and international advisor on policy and a legal expert on international trade and investment.
    <div>
          <h3 style={{textAlign:"center"}}>About ICC</h3>
          <div class="card mb-3" style={{maxWidth:'800px', margin:'30px'}}>
                  {/* style={{max-width: "540px"}} */}
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.sportzcraazy.com/wp-content/uploads/2023/05/icc.jpeg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Chairman : Greg Barclay</h5>
                            <p class="card-text">A director of Cricket World Cup 2015 and a former board member and chairman of the Northern Districts Cricket Association.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{maxWidth:'800px', margin:'30px',}}>
                  {/* style={{max-width: "540px"}} */}
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://gumlet.assettype.com/bloombergquint%2F2023-08%2F52713f4e-e4df-4c4a-921d-0640300a106c%2Fjohn_denton.jpg?rect=0%2C0%2C1153%2C649&auto=format%2Ccompress&w=732"  class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">  Secretary : John Denton</h5>
                            <p class="card-text">He is a global business leader and international advisor on policy and a legal expert on international trade and investment.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
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
