import main from '../styles/main.scss';

const Main = ({data, search, select}) => {

    const renderList = () => {
        return (data)
        .filter((eachCharacter) =>eachCharacter.name.toLowerCase().includes(search.toLowerCase()))
        .filter ((eachCharacter) => 
        eachCharacter.house.toLowerCase().includes(select.toLowerCase())
        )
        .map((eachCharacter, index) => (
        <li key={index}>
          <img className="main__image" alt="imagen del personaje" src={eachCharacter.image}/>
          <p className="main__name">{eachCharacter.name}</p>
          <p className="main__species">{eachCharacter.species}</p>
        </li>
        )
        );
      };
      
    return (
    <main className="main">
      <ul className="main__list">{renderList()}</ul>
    </main>
    )
};

export default Main;