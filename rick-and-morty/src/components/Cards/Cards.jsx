import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards=({characters}) => {
   return (
   <div className={style.infomain}>
         {characters.map (({id,name,status,species,gender,origin,image}) =>{
            return (
               <div className= {style.infocard}>
                  <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               </div>
            )
         })}
   </div>
   )
}

export default Cards;