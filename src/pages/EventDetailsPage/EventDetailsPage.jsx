import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import eventsService from '../../services/events.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context"
import AsisstantsList from '../../components/AssistantsList/AssistantList'
import "../EventDetailsPage/EventDetailsPage.css"


function EventDetailsPage() {

    const [eventDetails, setEventDetails] = useState({})
    const [eventAssitantsArr, setEventAssistansArr] = useState()
    const [isAssisting, setIsAssisting] = useState(false)
    const { id } = useParams()
    const { user } = useContext(AuthContext)


    const refreshData = () => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                setEventDetails(data)
                setEventAssistansArr(data.assistants)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        refreshData()
    }, [id])

    const navigate = useNavigate()


    const deleteEvent = () => {
        eventsService
            .deleteOneEvent(id)
            .then(() => navigate("/eventos/listado"))
            .catch(err => console.log(err))
    }

    const assistEvent = () => {
        eventsService
            .assitEvent(id)
            .then(() => refreshData())
            .catch(err => console.log(err))
    }

    const cancelAssistance = () => {
        eventsService
            .doNotAssistEvent(id)
            .then(() => refreshData())
            .catch(err => console.log(err))
    }

    return (
        <Container className="event">
            <h1>Detalles del evento</h1>
            <hr />
            <br />

            <Row className="rowEvent">
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>{eventDetails.name}</h3>
                    <p> <strong>Fecha:</strong>  {eventDetails.date?.slice(0, 10)}</p>
                    <p> <strong>Lugar:</strong>   {eventDetails.location}</p>
                    <p> <strong>Descripción:</strong>   {eventDetails.description}</p>
                    <p> <strong>Assistentes:</strong>   {eventAssitantsArr?.map(eachAssitant => <AsisstantsList eachAssitant={eachAssitant} />)}</p>
                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={eventDetails.image} alt={eventDetails.title} />
                </Col>
            </Row>

            <Row className="detailsButtons">
                <Col md={4}>

                    <Link to="/eventos/listado">
                        <Button className="button" variant="light" style={{ width: '100%' }}>Volver</Button>
                    </Link>
                </Col>
                {
                    user && user._id === eventDetails.owner &&
                    <>
                        <Col md={4}>
                            <Link to={`/eventos/modificar-evento/${eventDetails._id}`}>
                                <Button className="button" variant="light" style={{ width: '100%' }}>Editar evento</Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Button className="button" variant="light" style={{ width: '100%' }} onClick={deleteEvent}>Borrar evento</Button>
                        </Col>
                    </>
                }

                {
                    user && user._id !== eventDetails.owner &&
                    <>
                        <Col md={4}>
                            <Button className="button" style={{ width: '100%' }} variant="light" onClick={assistEvent}>Asistir al evento</Button>
                        </Col>
                        <Col md={4}>
                            <Button className="button" style={{ width: '100%' }} variant="light" onClick={cancelAssistance}>Cancelar asistencia</Button>
                        </Col>
                    </>
                }
            </Row >

        </Container >
    )
}

export default EventDetailsPage