import '../styles/characterList.scss';
import CharacterCard from './CharacterCard';
import Error from './Error';

const CharacterList = ({characterFilter, search}) => {

    if(characterFilter.length === 0 && search !== '') {
        return <Error/> };  

    const renderList = characterFilter.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>
    });

    return (
        <section className="main">
          <ul className="main__list">{renderList}</ul>
        </section>
    )
};

export default CharacterList;