
import ListCard from "../../components/ListCard/ListCard"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import "../../services/material.service"
import "../MaterialDetailsPage/MaterialDetailsPage.css"



const MaterialDetailsPage = () => {

    return (
        <>

            <ListCard />

            <Link to="/">
                <Button className=" button materialButton" variant="light">Volver</Button>
            </Link>
        </>

    )

}

export default MaterialDetailsPage