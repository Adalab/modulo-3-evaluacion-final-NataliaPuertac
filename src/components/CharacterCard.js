import { Link } from "react-router-dom";
import '../styles/layouts/characterCard.scss';

const CharacterCard = ({eachCharacter}) => {
return(
    <Link className="link" to={`/character/${eachCharacter.id}`}>
        <li className="li">
          <img className="li__image" alt="imagen del personaje" src={eachCharacter.image !== '' ? eachCharacter.image : 'https://i.pinimg.com/originals/58/5a/03/585a039dd24fb37cdfda73806a30b5fb.png'}/>
            <p className="li__name">{eachCharacter.name}</p>
            <p className="li__species">{eachCharacter.species}</p>
          
        </li>
    </Link>
);
};

export default CharacterCard;
