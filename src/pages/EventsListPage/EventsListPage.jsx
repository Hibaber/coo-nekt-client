import { useState, useEffect, useContext } from 'react'
import eventsService from '../../services/events.service'
import { Container, Button, Row, Col } from 'react-bootstrap'
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

                <Row className="eventList">
                    <Link to="/eventos/listado">
                        <EventsList events={events} />
                    </Link>
                </Row>
                <Row>
                    <div className="botones">
                        <Col md={4}>

                            <Link to="/usuario">
                                <Button className="button" style={{ width: '100%' }} variant="secondary">Volver</Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/eventos/crear-evento">
                                <Button className="button right" variant="secondary" style={{ width: '100%' }}  >Crear evento</Button>
                            </Link>
                        </Col>
                    </div>

                </Row>

            </Container>




        </>


    )

}

export default EventsListPage