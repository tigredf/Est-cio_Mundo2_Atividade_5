/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


const cors = require('cors');

App.use(cors());
*/
import React from 'react';
import LivroLista from './components/LivroLista';
import LivroDados from './components/LivroDados';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Catálogo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/livro-dados" className="nav-link">Novo</NavLink>
        </li>
      </ul>
    </nav>
    <body style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/livro-dados" element={<LivroDados />} />
      </Routes>
    </body>
    </Router>
  );
}

export default App;
