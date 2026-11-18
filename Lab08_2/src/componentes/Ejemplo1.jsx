import React, { useState } from 'react';
import './Ejemplo.css'; // Importación del CSS externo

const Ejemplo1 = () => {
  // 1. Estado para almacenar el arreglo de pokemones
  const [pokemones, setPokemones] = useState([
    {
      id: 1,
      nombre: 'Pikachu',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    },
    {
      id: 2,
      nombre: 'Charmander',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 3,
      nombre: 'Bulbasaur',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    }
  ]);

  return (
    <div className="pokemon-container">
      <h1 className="pokemon-title"> Listado de Pokemones</h1>


      {/* Rejilla de Pokémones */}
      <div className="pokemon-grid">
        {pokemones.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <div className="pokemon-image-wrapper">
              <img
                src={pokemon.imagen}
                alt={pokemon.nombre}
                className="pokemon-image"
              />
            </div>
            <h4 className="pokemon-name">{pokemon.nombre}</h4>
          </div>
        ))}
      </div>
    </div>

  );
};

// Exportación por defecto
export default Ejemplo1;