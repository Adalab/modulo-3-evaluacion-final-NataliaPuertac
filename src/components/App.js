import '../styles/App.scss';
import Filters from './Filters';
import getApi from '../services/api';
import { useState, useEffect } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import potter from '../images/potter.jpg';

function App() {

  //variables de estado

  const [data, setData] = useState ([])
  const [search, setSearch]= useState('')
  const [select, setSelect] = useState ('Gryffindor')
  
  //efectos

  useEffect(() => {
    getApi().then((response) => {
      setData(response);
    });
  }, []);

  //función para filtrar por casa y nombre

  const characterFilter = data.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
  })
  .filter ((eachCharacter) => {
    return eachCharacter.house.toLowerCase().includes(select.toLowerCase());
  })

  //funcion reset

  const handleReset = () => {
    setSearch ('');
    setSelect ('Gryffindor');
  };
  
  //orden alfabético

  characterFilter.sort((a, b) => a.name.localeCompare(b.name));

  const {pathname} = useLocation();

  const dataUrl = matchPath('/character/:id', pathname);

  const characterId = dataUrl !== null ? dataUrl.params.id : null

  const characterFind = characterFilter.find((eachCharacter) => eachCharacter.id === characterId)

  //devuelve el HTML

  return (
  <div className="App">
    <header className="header">
      <img className="header__image" alt='harry Potter' src={potter}/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<>
          <Filters setSearch={setSearch} setSelect={setSelect} search={search} handleReset={handleReset}/>
          <CharacterList search={search} select={select} characterFilter={characterFilter}/>
        </>}/>
        <Route path='/character/:characterId' 
          element={<CharacterDetail characterFind={characterFind}/>}/> 
      </Routes>
    </main>
  </div>
  );
}

export default App;
