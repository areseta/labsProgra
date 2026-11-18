import React, { useState, useEffect } from 'react';

const PokemonManager = () => {
  const [favoritePokemon, setFavoritePokemon] = useState('');
  const [inputFav, setInputFav] = useState('');

  const [sessionTeam, setSessionTeam] = useState([]);
  const [inputTeam, setInputTeam] = useState('');

  // 1. CARGAR DATOS INICIALES AL MONTAR EL COMPONENTE
  useEffect(() => {
    // localStorage: Recuperar favorito
    const savedFavorite = localStorage.getItem('favorite_pokemon');
    if (savedFavorite) {
      setFavoritePokemon(savedFavorite);
    }

    // sessionStorage: Recuperar equipo actual de la sesión
    const savedSessionTeam = sessionStorage.getItem('current_session_team');
    if (savedSessionTeam) {
      setSessionTeam(JSON.parse(savedSessionTeam));
    }
  }, []);

  // 2. MANEJO DE LOCALSTORAGE (Favorito permanente)
  const handleSaveFavorite = (e) => {
    e.preventDefault();
    if (!inputFav.trim()) return;
    
    localStorage.setItem('favorite_pokemon', inputFav);
    setFavoritePokemon(inputFav);
    setInputFav('');
  };

  const handleClearFavorite = () => {
    localStorage.removeItem('favorite_pokemon');
    setFavoritePokemon('');
  };

  // 3. MANEJO DE SESSIONSTORAGE (Equipo temporal de sesión)
  const handleAddToSessionTeam = (e) => {
    e.preventDefault();
    if (!inputTeam.trim() || sessionTeam.length >= 6) return;

    const updatedTeam = [...sessionTeam, inputTeam];
    setSessionTeam(updatedTeam);
    sessionStorage.setItem('current_session_team', JSON.stringify(updatedTeam));
    setInputTeam('');
  };

  const handleClearSessionTeam = () => {
    sessionStorage.removeItem('current_session_team');
    setSessionTeam([]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>🎮 Gestor Pokémon: LocalStorage vs SessionStorage</h2>

      {/* SECCIÓN LOCALSTORAGE */}
      <div style={{ border: '2px solid #ffcb05', padding: '15px', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#fdf8e2' }}>
        <h3>⭐ Pokémon Favorito (Usa <code>localStorage</code>)</h3>
        <p><em>Este dato persiste aunque cierres el navegador o apagues la PC.</em></p>
        
        {favoritePokemon ? (
          <div>
            <p>Tu favorito actual es: <strong>{favoritePokemon}</strong></p>
            <button onClick={handleClearFavorite} style={{ backgroundColor: '#ff5959', color: 'white', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px' }}>
              Borrar Favorito
            </button>
          </div>
        ) : (
          <form onSubmit={handleSaveFavorite}>
            <input 
              type="text" 
              placeholder="Ej. Pikachu, Charizard..." 
              value={inputFav} 
              onChange={(e) => setInputFav(e.target.value)}
              style={{ padding: '8px', marginRight: '8px' }}
            />
            <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Guardar en Local</button>
          </form>
        )}
      </div>

      {/* SECCIÓN SESSIONSTORAGE */}
      <div style={{ border: '2px solid #3b4cca', padding: '15px', borderRadius: '8px', backgroundColor: '#eef2ff' }}>
        <h3>🎒 Equipo de Batalla Temporal (Usa <code>sessionStorage</code>)</h3>
        <p><em>Este equipo se borra automáticamente al cerrar la pestaña del navegador.</em></p>

        <form onSubmit={handleAddToSessionTeam}>
          <input 
            type="text" 
            placeholder="Añadir Pokémon al equipo (máx 6)..." 
            value={inputTeam} 
            onChange={(e) => setInputTeam(e.target.value)}
            style={{ padding: '8px', marginRight: '8px' }}
            disabled={sessionTeam.length >= 6}
          />
          <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }} disabled={sessionTeam.length >= 6}>
            Añadir al Equipo
          </button>
        </form>

        <ul>
          {sessionTeam.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul>

        {sessionTeam.length > 0 && (
          <button onClick={handleClearSessionTeam} style={{ backgroundColor: '#ff5959', color: 'white', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', marginTop: '10px' }}>
            Limpiar Sesión de Equipo
          </button>
        )}
      </div>
    </div>
  );
};

export default PokemonManager;