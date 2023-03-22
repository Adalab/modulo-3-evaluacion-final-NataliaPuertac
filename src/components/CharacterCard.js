import { Link } from "react-router-dom";

const CharacterCard = ({eachCharacter}) => {
return(
    <Link to={`/character/${eachCharacter.id}`}>
        <li>
          <img className="main__image" alt="imagen del personaje" src={eachCharacter.image !== '' ? eachCharacter.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${eachCharacter.name}` }/>
          <p className="main__name">{eachCharacter.name}</p>
          <p className="main__species">{eachCharacter.species}</p>
        </li>
    </Link>
)
}

export default CharacterCard;