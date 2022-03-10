import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import eventsService from '../../services/events.service'
import uploadService from '../../services/upload.service'

const EditEventForm = () => {

    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        image: '',
        description: ''
    })


    const { id } = useParams()

    const { name, date, location, image, description } = eventData

    useEffect(() => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                const { name, date, location, image, description } = data
                const eventData = { name, date, location, image, description }
                setEventData(eventData)
            })
    }, [])

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

        eventsService
            .editOneEvent(id, eventData)
            .then(({ data }) => {
                console.log("se ha modificado el evento", data)
                navigate("/eventos/listado")
            })

            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Nombre del evento</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Fecha del evento</Form.Label>
                    <Form.Control type="date" value={date} onChange={handleInputChange} name="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Lugar</Form.Label>
                    <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={uploadImage} name="image" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <div className="d-grid gap-2">
                    {!loadingImage ? <Button className="button" variant="light" type="submit">Modificar evento</Button> : <button className="button" disabled>Cargando...</button>}
                </div>
            </Form >
        </Container>
    )
}

export default EditEventForm