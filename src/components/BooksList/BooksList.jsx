import {Row, Col} from 'react-bootstrap'
import BookCard from '../BookCard/BookCard'
import materialService from "../../services/material.service"
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'

const BooksList = () => {

    const [books, setBooks] = useState([])

    const {isLoggedIn} = useContext (AuthContext)

    useEffect (() => {
        loadMaterial()
    }, []) 

    const loadMaterial = () => {
        materialService
            .getAllBooks()
            .then (({data}) => setBooks(data))
            .catch(err => console.log (err))
    }
    return(
        <Row>
            {books.map(book => {
                return <Col md={4} key={book._id}> <BookCard {...book}/></Col>
            })}
        </Row>
    )
}

export default BooksList