import "./BookCard.css"
import { useEffect, useState } from "react";



const Books = ({ image, name, description, details }) => {

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
                            <div className="inner">
                            <img src={imgUri} alt='img'/>
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
export default Books