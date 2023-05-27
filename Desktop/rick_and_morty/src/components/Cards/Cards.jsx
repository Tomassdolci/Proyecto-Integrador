import Card from '../Card/Card';
import style from "./cards.module.css"

const Cards=({characters, onClose}) => {
   return (
   <div className={style.infomain}>
         {characters.map (({id,name,status,species,gender,origin,image}) =>{
            return (
               <div className= {style.infocard}>
                  <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
                  />
               </div>
            )
         })}
   </div>
   )
}

export default Cards;