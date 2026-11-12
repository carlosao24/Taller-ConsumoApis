import { useEffect, useState } from 'react';
import './App.css';
import DigimonCard from './components/DigimonCard';

function App() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    const obtenerDigimons = async () => {
      try {
        const response = await fetch('https://digi-api.com/api/v1/digimon?pageSize=20');
        const datos = await response.json();
        
        // Digi-API almacena el listado en la propiedad 'content'
        setDigimons(datos.content);
      } catch (error) {
        console.error("Error al obtener los Digimon:", error);
      }
    };

    obtenerDigimons();
  }, []);

  return (
    <div className="container">
      <h1>Galería de Digimon</h1>
      <div className="grid-container">
        {digimons.map((digimon) => (
          <DigimonCard key={digimon.id} digimon={digimon} />
        ))}
      </div>
    </div>
  );
}

export default App;