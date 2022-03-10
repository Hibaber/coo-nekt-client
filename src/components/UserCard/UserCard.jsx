import { useEffect } from "react"
import "./UserCard.css"


const UserCard = ({ user }) => {

    return (

        user ?
            <div className="card-container">
                <span className="pro">{user.level}</span>
                <img className="round" src={user.image} alt="user" />
                <h3>{user.username}</h3>
                <p>{user.linkedin}</p>
                <div className="description">
                    <h6>{user.description}</h6>
                </div>
            </div>
            :
            <div>Holi</div>
    )
}

export default UserCard
