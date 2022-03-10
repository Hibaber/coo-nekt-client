import {Row, Col} from 'react-bootstrap'
import CoworkingCard from '../CoworkingCard/CoworkingCard'
import materialService from "../../services/material.service"
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'

const CoworkingList = () => {

    const [coworkings, setCoworkings] = useState([])

    const {isLoggedIn} = useContext (AuthContext)

    useEffect (() => {
        loadMaterial()
    }, []) 

    const loadMaterial = () => {
        materialService
            .getAllCoworking()
            .then (({data}) => setCoworkings(data))
            .catch(err => console.log (err))
    }
    return(
        <Row>
            {coworkings.map(coworking => {
                return <Col md={4} key={coworking._id}> <CoworkingCard {...coworking}/></Col>
            })}
        </Row>
    )
}

export default CoworkingList