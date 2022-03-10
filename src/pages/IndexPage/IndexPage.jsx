
import indexPicture from "../IndexPage/index.png"
import { Container, Col } from 'react-bootstrap'
import "../IndexPage/IndexPage.css"

const IndexPage = () => {

    return (

        <Container className="index">
            <Col> <img className="index-pic" src={indexPicture}></img></Col>
            <Col>
                <h1> <span id="change1">¡Bienvenid@ a CooNekt!  (•◡•)</span></h1>

                <p className="welcome">
                    <br />
                    <br />
                    El mejor espacio para hacer networking y conocer a otros emprendedores inovadores como tú.
                    <br />
                    Regístrate y empieza a organizar meetups para intercambiar ideas y tips acerca de los temas que más te apasionen.
                    <br />
                    ¡No dejes tu proyecto de hoy para mañana! ¡CooNekt now!
                </p>
            </Col>
        </Container>

    )
}

export default IndexPage

