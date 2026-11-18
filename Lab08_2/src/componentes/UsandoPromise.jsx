import React, { useState, useEffect } from 'react';

export function PokemonPromise() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función que encapsula la petición en un objeto Promise explícito
  const fetchPokemonPromise = (name) => {
    return new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          if (!res.ok) {
            reject(`No se pudo obtener la información de ${name}`);
          }
          return res.json();
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err.message));
    });
  };

  useEffect(() => {
    fetchPokemonPromise('charmander')
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando Pokémon con Promise explícita...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>2. Método con Objeto Promise Explicito</h2>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Número:</strong> #{pokemon.id}</p>
    </div>
  );
}

export default PokemonPromise;