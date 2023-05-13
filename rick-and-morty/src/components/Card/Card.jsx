import style from "./Card.module.css"

const Card = ({ name, status, species, gender, origin, image, onClose} ) => {

return (
    <div className={style.card}>
        <div>
            <button onClick={onClose}>𝓧</button>
            </div>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <p>{origin}</p>
            <img src={image} alt="" className="image"/> 
        </div>
    )
}

export default Card;
