import React from 'react';
import MainLayout from './layout/MainLayout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';

// Componentes de ejemplo 
import Ejemplo1 from './componentes/Ejemplo1';
import Ejemplo2 from './componentes/Ejemplo2';

// Componentes del Lab 6
import ItemList from './componentes/ItemList';
import ItemDetails from './componentes/ItemDetails';
import ItemList2 from './componentes/ItemList2';
import ItemDetails2 from './componentes/ItemDetails2';

// COmponentes del Lab 7
import Frutas from './componentes/Frutas';
import Frutas2 from './componentes/Frutas2';
import PokemonManager from './componentes/PokemonManager';


// lab 08
import UsandoFetch from './componentes/UsandoFetch';
import UsandoAsync from './componentes/UsandoAsync';
import UsandoPromise from './componentes/UsandoPromise';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opcion1" element={<Ejemplo1 />} />
          <Route path="/opcion2" element={<Ejemplo2 />} />
// BLoque del lab 06
          <Route path="/lista" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/lista2" element={<ItemList2 />} />
          <Route path="/items/:id/:category" element={<ItemDetails2 />} />
// Fin de bloque
          // BLoque del lab 07
          <Route path="/frutas" element={<Frutas />} />
          <Route path="/frutas2" element={<Frutas2 />} />
            // Fin de bloque

          // Lab 07_2
          <Route path="/pokemonStorage" element={<PokemonManager />} />
            // Fin Lab 07_2

          <Route path="/usandoFetch" element={<UsandoFetch />} />
          <Route path="/usandoAsync" element={<UsandoAsync />} />
          <Route path="/usandoPromise" element={<UsandoPromise />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

