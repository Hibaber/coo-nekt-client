
import { Row, Col } from 'react-bootstrap'

import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import MaterialCard from "../../components/MaterialCard/MaterialCard"
import userService from "../../services/user.service"
import { useParams } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'


const UserPage = () => {

    const { user_id } = useParams()

    const { user, logOutUser } = useContext(AuthContext)

    console.log("ha entrado a la vista del usuario")

    const [userInformation, setUserInformation] = useState({})

    useEffect(() => {
        user_id ? userService
            .getOneUserById(user_id)
            .then(({ data }) => setUserInformation(data))
            .catch(err => console.log(err))

            :

            user && userService
                .getOneUserById(user._id)
                .then(({ data }) => setUserInformation(data))
                .catch(err => console.log(err))

    }, [user, user_id])

    return (
        <>

            <Row xs={3} md={2} className="g-6 justify-content-center">
                <UserCard user={userInformation} />
                {
                    user_id && user?._id === user_id &&
                    <MaterialCard />
                }
            </Row>

        </>
    )
}

export default UserPage