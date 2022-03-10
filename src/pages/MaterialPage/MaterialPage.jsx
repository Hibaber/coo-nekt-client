import MaterialCard from "../../components/MaterialCard/MaterialCard"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MaterialPage = () => {

    return (
        <>
            <MaterialCard />
            <br></br>
            <br></br>

            <Link to="/usuario">
                <Button className="button" variant="light">Volver</Button>
            </Link>

        </>
    )



}

export default MaterialPage