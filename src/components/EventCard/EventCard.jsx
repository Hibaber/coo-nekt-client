import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../EventCard/EventCard.css"

const EventCard = ({ name, date, image, _id }) => {
    return (

        <Card className="event card" style={{ height: '400px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>{date?.slice(0, 10)}</p>
                </Card.Text>
                <Link to={`/eventos/detalles/${_id}`}>
                    <Button className="button eventCard" variant="secondary">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>

    )
}

export default EventCard