import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./CoworkingCard.css"



const CoworkingCard = ({ image, name, description, details }) => {

    const [imgUri, setImgUri] = useState();

    useEffect(() => {
        setImgUri(image)
    }, [])

    return (
        <>
            <div className="cardPosition">
                <div className="cols">
                    <div className="col" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front">
                                <img className="front-img" src={imgUri} alt='img' />
                                <div className="inner">
                                    <p>{name}</p>
                                    <span>{details}</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default CoworkingCard