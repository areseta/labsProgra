import React, { useState } from 'react';
import './Ejemplo.css'; // Importación del CSS externo

const Ejemplo2 = () => {
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

  // 2. Estados para el formulario
  const [nombreInput, setNombreInput] = useState('');
  const [imagenInput, setImagenInput] = useState('');

  // 3. Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreInput.trim().length === 0) return;

    const nuevaImagen = imagenInput.trim() !== '' 
      ? imagenInput.trim() 
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

    const nuevoPokemon = {
      id: Date.now(),
      nombre: nombreInput.trim(),
      imagen: nuevaImagen
    };

    setPokemones([...pokemones, nuevoPokemon]);

    setNombreInput('');
    setImagenInput('');
  };

  return (
    <div className="pokemon-container">
      <h1 className="pokemon-title"> Pokédex App</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="pokemon-form-card">
        <h3 className="pokemon-form-title">Agregar Nuevo Pokémon</h3>
        
        <div className="pokemon-input-group">
          <label className="pokemon-label">Nombre del Pokémon *</label>
          <input
            type="text"
            placeholder="Ej. Squirtle, Gengar..."
            value={nombreInput}
            onChange={(e) => setNombreInput(e.target.value)}
            className="pokemon-input"
          />
        </div>

        <div className="pokemon-input-group">
          <label className="pokemon-label">URL de Imagen (Opcional)</label>
          <input
            type="url"
            placeholder="https://..."
            value={imagenInput}
            onChange={(e) => setImagenInput(e.target.value)}
            className="pokemon-input"
          />
        </div>

        <button type="submit" className="pokemon-button">
          ➕ Registrar Pokémon
        </button>
      </form>

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
export default Ejemplo2;