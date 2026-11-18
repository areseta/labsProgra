import React, { useState, useEffect } from 'react';

export function PokemonFetch() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    // Solicitamos la lista completa incrementando el límite
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al recuperar la lista de Pokémon');
        }
        return response.json();
      })
      .then((data) => {
        // Mapeamos los resultados para adjuntar la URL de la imagen (sprite) usando el ID de la URL
        const formattedList = data.results.map((pokemon) => {
          // Extrae el ID del Pokémon de su URL (ejemplo: https://pokeapi.co/api/v2/pokemon/25/ -> 25)
          const urlParts = pokemon.url.split('/').filter(Boolean);
          const id = urlParts[urlParts.length - 1];
          
          return {
            name: pokemon.name,
            id: id,
            // Construimos la URL estática de la imagen oficial sin hacer otra petición HTTP
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });

        setPokemonList(formattedList);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtrado ligero en cliente para facilitar la búsqueda en la lista masiva
  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  if (loading) return <p>Cargando todos los Pokémon con Fetch...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Lista Completa de Pokémon ({pokemonList.length} encontrados)</h2>

      {/* Buscador opcional para navegar entre los miles de resultados */}
      <input
        type="text"
        placeholder="Filtrar por nombre..."
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '300px',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '12px',
          maxHeight: '600px',
          overflowY: 'auto',
          paddingRight: '10px'
        }}
      >
        {filteredPokemon.slice(0, 150).map((pokemon) => (
          <div
            key={pokemon.id}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9'
            }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              width="80"
              height="80"
              loading="lazy"
              onError={(e) => {
                // Fallback por si algún ID especial (p. ej. formas alternativas) no tiene sprite estándar
                e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
              }}
            />
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#666' }}>
              #{pokemon.id}
            </p>
            <strong style={{ fontSize: '14px', textTransform: 'capitalize' }}>
              {pokemon.name}
            </strong>
          </div>
        ))}
      </div>
      
      {filteredPokemon.length > 150 && (
        <small style={{ color: '#888', display: 'block', marginTop: '10px' }}>
          Mostrando los primeros 150 de {filteredPokemon.length} resultados filtrados para optimizar la vista.
        </small>
      )}
    </div>
  );
}


export default PokemonFetch;