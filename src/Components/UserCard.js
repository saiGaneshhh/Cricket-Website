import React from 'react'
import "./UserCard.css"

 function UserCard({ name, country, id }) {


    return (
        <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
                
                    <h5 className="card-title"><b>Name:</b> {name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary"><b>Country:</b> {country}</h6>
                    <p className="card-text"> <b>Batting:</b>I am a Right Handed Batsmen from {country}</p>
                    <p className="card-text"><b>Bowling:</b>I am a Right Aram Off Break from {country}</p>
                

            </div>
        </div>
    )
}
export default UserCard;