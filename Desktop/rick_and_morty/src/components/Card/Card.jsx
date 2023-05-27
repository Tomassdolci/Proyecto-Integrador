import style from "./card.module.css"
import { Link } from "react-router-dom"

const Card = ({id, name, status, species, gender, origin, image, onClose} ) => {

   return (
      <div className={style.card}>
         <Link to={`/detail/${id}`}>
         <div>
            <button onClick={()=>{onClose(id)}}>Close</button>
         </div>
         <h2>{name}</h2>
         <p>{status}</p>
         <p>{species}</p>
         <p>{gender}</p>
         <p>{origin}</p>
         <img src={image} alt=" " className={style.img}/> 
         </Link>
      </div>
   )
}

export default Card;
