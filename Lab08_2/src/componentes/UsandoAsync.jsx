import React, { useState, useEffect } from 'react';

export function PokemonAsyncAwait() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
        
        if (!response.ok) {
          throw new Error('No se encontró el Pokémon solicitado');
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, []);

  if (loading) return <p>Cargando Pokémon con Async/Await...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>3. Método Async / Await</h2>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Número:</strong> #{pokemon.id}</p>
    </div>
  );
}


export default PokemonAsyncAwait;