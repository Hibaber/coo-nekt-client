import './MaterialCard.css'
import { Link } from 'react-router-dom'
import networking from "../MaterialCard/networking.png"
import material from "../MaterialCard/material.png"
const MaterialCard = () => {

    return (
        <>
            <ul class="cards">
                <li>
                    <Link to="/eventos/listado" class="card material">
                        <img src={networking} class="card__image" alt="Eventos" />
                        <div class="card__overlay">
                            <div class="card__header">
                                <div class="card__header-text">
                                    <h3 class="card__title">NETWORKING</h3>
                                </div>
                            </div>
                            <p class="card__description">Amplia tu red de contactos profesionales. Así, podrás generar oportunidades de negocio y/o empleo.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/material" class="card material">
                        <img src={material} class="card__image" alt="Eventos" />
                        <div class="card__overlay">
                            <div class="card__header">
                                <div class="card__header-text">
                                    <h3 class="card__title">MATERIAL</h3>
                                </div>
                            </div>
                            <p class="card__description">La formación es básica a la hora de emprender. No puedes dejar de lado aquellos libros y manuales que te pueden ayudar para comenzar tu negocio.</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </>


    )


}

export default MaterialCard