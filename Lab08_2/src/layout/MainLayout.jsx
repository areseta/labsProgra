import React from 'react';
import './MainLayout.css'; // <--- Importante: vinculamos el CSS aquí
import { Link } from 'react-router-dom'; // <--- Importante

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <img src="logo.png" alt="Logo" className="layout-logo" />
        <h1>Curso Programacion Web - Seccion 653</h1>
      </header>

      <div className="layout-body">
        <aside className="layout-sidebar">
          <nav className="layout-nav">
            <ul>
              {/* Usamos Link en lugar de <a href> */}
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/opcion1">Ejemplo 1</Link></li>
              <li><Link to="/opcion2">Ejemplo 2</Link></li>
              <li><Link to="/lista" >Lista 1</Link></li>
              <li><Link to="/lista2" >Lista 2</Link></li>
              <li><Link to="/frutas" >Frutas</Link></li>
              <li><Link to="/frutas2" >Frutas 2</Link></li>
              <li><Link to="/pokemonStorage" >Pokemon Storage</Link></li>
              <li><Link to="/usandoFetch" >Ejemplo de Fetch</Link></li>
                       <li><Link to="/usandoPromise" >Ejemplo de Promise</Link></li>
                       <li><Link to="/usandoAsync" >Ejemplo de Async</Link></li>

            </ul>
          </nav>
        </aside>

        <main className="layout-main">
          {children}
        </main>
      </div>

      <footer className="layout-footer">
        <p>© 2026-2 - Programacion Web</p>
      </footer>
    </div>
  );
};

export default MainLayout;