import { Link } from "react-router-dom";
import '../styles/layouts/characterCard.scss';

const CharacterCard = ({eachCharacter}) => {
return(
    <Link className="link" to={`/character/${eachCharacter.id}`}>
        <li className="li">
          <img className="li__image" alt="imagen del personaje" src={eachCharacter.image !== '' ? eachCharacter.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${eachCharacter.name}` }/>
            <p className="li__name">{eachCharacter.name}</p>
            <p className="li__species">{eachCharacter.species}</p>
          
        </li>
    </Link>
)
}

export default CharacterCard;