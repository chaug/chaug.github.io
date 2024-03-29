import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './index.scss';

import HomePage from './pages/Home';
import SitesPage from './pages/Sites';
import GamesPage from './pages/Games';
import MusicPage from './pages/Music';
import TinyPage from './pages/Tiny';
import WebDevPage from './pages/WebDev';

function App() {
  return <Router>
    <nav>
      <Link to="/"       >Home       </Link> |{" "}
      <Link to="/sites"  >Sites      </Link> |{" "}
      <Link to="/games"  >Games      </Link> |{" "}
      <Link to="/music"  >Music      </Link> |{" "}
      <Link to="/tiny"   >Tiny things</Link> |{" "}
      <Link to="/webdev" >Dev        </Link>
    </nav>
    <Routes>
      <Route path="/"       element={<HomePage />} />
      <Route path="sites"  element={<SitesPage />} />
      <Route path="games"  element={<GamesPage />} />
      <Route path="music"  element={<MusicPage />} />
      <Route path="tiny"   element={<TinyPage />} />
      <Route path="webdev" element={<WebDevPage />} />
    </Routes>
  </Router>
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
