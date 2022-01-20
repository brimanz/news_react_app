import React, {useState, useEffect} from 'react';

//component imports
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';



const App = () => {

  //news state
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  //using useEffect hook
  useEffect(() =>{
    const consultarAPI = async() =>{
      const key = '8eb904bbb6a14d9ca70146c6d4f3bdaa';
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${key}`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <div>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </div>
  );
}

export default App;
