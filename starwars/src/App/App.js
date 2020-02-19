import React, { useEffect, useState, useCallback } from 'react';
import './App.css';

import Personagem from './components/Personagem';
import { people } from '../services/starwars-service';

function App() {

  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetchPersonagens()
  }, [])

  const fetchPersonagens = useCallback( async () => {
    const { data } = await people();
    
    // Ordem alfabética
    const sortedData = data.results.sort( (a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase();
      if( nameA > nameB ) {
        return 1;
      } else if (nameA < nameB) {
        return -1;
      } else {
        return 0
      }
    });

    setPersonagens(sortedData);

  }, [personagens])

  function RemoverPersonagem(index) {
    const filtered = personagens.filter((per, i) => i !== index);
    setPersonagens(filtered);
  }

  return (
    <div className="App">
      <div className="container">
        {personagens.map( (person, i) => (
          <Personagem 
            key={i} 
            cor={person.eye_color} 
            nome={person.name} 
            removeAction={() => RemoverPersonagem(i)} />
        ))}
      </div>
    </div>
  );
}

export default App;
