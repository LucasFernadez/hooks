import React from 'react';
import { useCustomFetch } from './hooks/useCustomFetch';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {
  const { data: pokemon, loading: loadingPokemon } = useCustomFetch(urlPokemon);
  const { data: rick, loading: loadingRick } = useCustomFetch(urlRick);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Personajes</h1>

      <div>
        <h2>Personaje Pokémon</h2>
        {loadingPokemon ? (
          <p>Cargando...</p>
        ) : (
          <>
            <p>{pokemon?.name}</p>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          </>
        )}
      </div>

      <div>
        <h2>Personaje Rick and Morty</h2>
        {loadingRick ? (
          <p>Cargando...</p>
        ) : (
          <>
            <p>{rick?.name}</p>
            <img src={rick?.image} alt={rick?.name} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
