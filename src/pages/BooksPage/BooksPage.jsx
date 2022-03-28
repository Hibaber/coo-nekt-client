import BooksList from "../../components/BooksList/BooksList"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import "../../services/material.service"
import "../../services/auth.service"

const BooksPage = () => {

    return (
        <>

            <Link to="/material">
                <Button className=" button materialButton" variant="light" style={{ width: "5%" }}>Volver</Button>
            </Link>
            <BooksList />

        </>

    )

}

export default BooksPage