import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import uploadService from '../../services/upload.service'


function SignupForm() {
    const [loadingImage, setLoadingImage] = useState(false)

    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        email: "",
        image: "",
        level: "",
        age: "",
        linkedin: "",
        description: "",
    })


    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
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
                setSignupForm({
                    ...signupForm,
                    image: data.cloudinary_url
                })
            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                navigate('/')
            })
            .catch(err => console.log('oops error!', err))
    }

    return (

        <Form className="signUp" onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" name="age" value={signupForm.age} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" name="image" onChange={uploadImage} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nivel</Form.Label>
                <Form.Select name="level" onChange={handleInputChange}>
                    <option disabled selected>¿Eres amateur o profesional?</option>
                    <option value='AMATEUR'>Amateur</option>
                    <option value='PROFESIONAL'>Profesional</option>
                </Form.Select>
            </Form.Group>

            <Form.Group >
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="text" name="linkedin" value={signupForm.linkedin} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Cuenta algo interesante sobre tí..." name="description" value={signupForm.description} onChange={handleInputChange} />
            </Form.Group>
            <br />
            <br />
            <Button className="button" variant="light" type="submit" style={{ width: '100%' }}>Acceder</Button>

        </Form>
    )
}

export default SignupForm