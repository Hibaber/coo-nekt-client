import { useState, useEffect, useContext } from 'react'
import eventsService from '../../services/events.service'
import { Container, Button, Row } from 'react-bootstrap'
import EventsList from '../../components/EventsList/EventsList'
import { AuthContext } from './../../context/auth.context'
import { Link } from 'react-router-dom'
import "../EventsListPage/EventsListPage.css"

const EventsListPage = () => {

    const [events, setEvents] = useState([])

    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    return (
        <>

            <Container className="events">

                <Row>
                    <Link to="/eventos/listado">
                        <EventsList events={events} />
                    </Link>
                </Row>
                <div className="botones">
                    <Link to="/usuario">
                        <Button className="button " variant="secondary">Volver</Button>
                    </Link>
                    <Link to="/eventos/crear-evento">
                        <Button className="button right" variant="secondary">Crear evento</Button>
                    </Link>
                </div>

            </Container>




        </>


    )

}

export default EventsListPage