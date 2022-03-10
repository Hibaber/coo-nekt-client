import './ListCard.css'
import { Link } from 'react-router-dom'
import coworking from "../ListCard/coworking.png"

const ListCard = () => {

    return (

        <ul class="cards">
            <li>
                <Link to="/coworking" class="card">
                    <img src={coworking} class="card__image" alt="Eventos" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">COWORKING</h3>
                            </div>
                        </div>
                        <p class="card__description">Amplia tu red de contactos profesionales. Así, podrás generar oportunidades de negocio y/o empleo.</p>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/libros" class="card">
                    <img src="https://media.istockphoto.com/vectors/retro-styled-colorful-bookshelf-vector-id148463487?b=1&k=20&m=148463487&s=612x612&w=0&h=Mx4PQEL8RVfMRPR4yv8G_CnjMeAL-V3kqFARBk-IWSw=" class="card__image" alt="Eventos" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <div class="card__header-text">
                                <h3 class="card__title">LIBROS</h3>
                            </div>
                        </div>
                        <p class="card__description">La formación es básica a la hora de emprender. No puedes dejar de lado aquellos libros y manuales que te pueden ayudar para comenzar tu negocio.</p>
                    </div>
                </Link>
            </li>
        </ul>
    )


}

export default ListCard