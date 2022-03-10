import { useState, useContext } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import eventsService from '../../services/events.service'
import uploadService from '../../services/upload.service'

const NewEventForm = () => {

    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        image: '',
        description: ''
    })

    const { name, date, location, image, description } = eventData

    const { getToken } = useContext(AuthContext)

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.target

        setEventData({
            ...eventData,
            [name]: value
        })
    }

    const uploadImage = e => {
        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('image', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setEventData({
                    ...eventData,
                    image: data.cloudinary_url
                })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        const token = getToken();

        console.log(token)

        eventsService
            .createEvent(eventData, token)
            .then((response) => console.log("se ha creado el evento", response.data))
            .then(() => navigate("/eventos/listado"))
            .catch(err => console.log(err))
    }

    return ( // añadir container y row 

        <Container>
            <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Nombre del meetup</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Fecha del meetup</Form.Label>
                    <Form.Control type="date" value={date} onChange={handleInputChange} name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Lugar del meetup</Form.Label>
                    <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Foto del meetup</Form.Label>
                    <Form.Control type="file" onChange={uploadImage} name="image" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción del meetup</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <div className="d-grid gap-2">
                    {!loadingImage ? <Button className="button" variant="light" type="submit">Crear meetup</Button> : <button disabled>Cargando...</button>}
                </div>

            </Form >
        </Container>

    )

}

export default NewEventForm