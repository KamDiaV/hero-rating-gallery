import React from 'react';
import './App.css';
import heroes from './heroes';
import HeroCard from '../src/components/HeroCard.jsx';

function App() {
  return (
    <div className="gallery">
      {heroes.map(h => <HeroCard key={h.name} hero={h} />)}
    </div>
  );
}

export default App;