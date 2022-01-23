import React from 'react';

import './Home.scss';

function HomePage() {
  return <div className="home-page">
    <header className="home-header">
      <a
        className="home-link"
        href="https://chaug.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio de Christophe Haug
      </a>
    </header>
  </div>;
}

export default HomePage;