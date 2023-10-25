import React from 'react'
import { useLocation } from 'react-router-dom';
// import '../App.css'
import './User.css'
function User() {
    const { state } = useLocation()
    // let imageStyle = {
 
    //     backgroundImage:
    //     'url("https://png.pngtree.com/background/20210716/original/pngtree-gas-smoke-blue-cloud-wallpaper-picture-image_1359222.jpg")',
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   };
    // const { id } = useParams()
    let imageStyle = {
 
        backgroundImage:
        'url("https://media.istockphoto.com/id/641189676/photo/cricket-stadium.jpg?s=612x612&w=0&k=20&c=6aUm1D7NiTTR6ZC4MCcLW2zBnMbIwfqDqc8NBIDATn4=")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
       paddingTop:'10px',
       paddingBottom:'40px'
      };
    return (
        <div className='main' style={imageStyle}>
             <h1 className='main1' >{state.name}</h1>
            <div className='info'>
                
                <h1><b>Name</b> : {state.name}</h1>
                <h2><b>Country</b> : {state.country}</h2>
                <h3><b>Born</b> : May17,2006</h3>
                <h3><b>Age</b> : 17 Years 102 Days</h3>
                <h3><b>Bowling Style </b>: Right Arm Medium</h3>
                <h3><b>Batting Style</b>: Right Hand Bat</h3>
            </div>

            <p>Cricket is played with a bat and ball and involves two competing sides (teams) of 11 players. The field is oval with a rectangular area in the middle, known as the pitch, that is 22 yards (20.12 metres) by 10 feet (3.04 metres) wide. Two sets of three sticks, called wickets, are set in the ground at each end of the pitch. Across the top of each wicket lie horizontal pieces called bails. The sides take turns at batting and bowling (pitching); each turn is called an “innings” (always plural). Sides have one or two innings each, depending on the prearranged duration of the match, the object being to score the most runs. The bowlers, delivering the ball with a straight arm, try to break (hit) the wicket with the ball so that the bails fall. This is one of several ways that the batsman is dismissed, or put out. A bowler delivers six balls at one wicket (thus completing an “over”), then a different player from his side bowls six balls to the opposite wicket. The batting side defends its wicket.
                There are two batsman up at a time, and the batsman being bowled to (the striker) tries to hit the ball away from the wicket. A hit may be defensive or offensive. A defensive hit may protect the wicket but leave the batsmen no time to run to the opposite wicket. In that case the batsmen need not run, and play will resume with another bowl. If the batsman can make an offensive hit, he and the second batsman (the nonstriker) at the other wicket change places. Each time both batsmen can reach the opposite wicket, one run is scored. Providing they have enough time without being caught out and dismissed, the batsmen may continue to cross back and forth between the wickets, earning an additional run for each time both reach the opposite side. There is an outside boundary around the cricket field. A ball hit to or beyond the boundary scores four points if it hits the ground and then reaches the boundary, six points if it reaches the boundary from the air (a fly ball). The team with the highest number of runs wins a match. Should both teams be unable to complete their number of innings before the time allotted, the match is declared a draw. Scores in the hundreds are common in cricket.
                Matches in cricket can range from informal weekend afternoon encounters on village greens to top-level international contests spread over five days in Test matches and played by leading professional players in grand stadiums.</p>
        </div>
    )
}
export default User;