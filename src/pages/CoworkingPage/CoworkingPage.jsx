import CoworkingList from "../../components/CoworkingList/CoworkingList"
import "../../services/material.service"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const CoworkingPage = () => {

    return (
        <>
            <CoworkingList />
            <Link to="/usuario">
                <Button className="button" variant="secondary">Volver</Button>
            </Link>
        </>

    )

}

export default CoworkingPage