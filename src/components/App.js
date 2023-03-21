import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import getApi from '../services/api';
import { useState, useEffect } from 'react';

function App() {

  //variables de estado

  const [data, setData] = useState ([])
  const [search, setSearch]= useState('')
  const [select, setSelect] = useState ('Gryffindor')
  
  //useEffect para la api

  useEffect(() => {
    getApi().then((response) => {
      setData(response);
    });
  }, []);

  
  //devuelve el HTML
  return (
  <div className="App">
    <Header setSearch={setSearch} setSelect={setSelect} search={search}/>
    <Main data={data} search={search} select={select}/>
    <Footer/>
  </div>
  );
}

export default App;
