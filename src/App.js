import React from 'react';
import './App.css';
import heroes from './heroes';
import HeroList from '../src/components/HeroList.jsx';
import HeroCard from '../src/components/HeroCard.jsx';

function App() {
  return (
    <HeroList
      items={heroes}
      renderItem={h => <HeroCard hero={h} />}
      keyExtractor={h => h.name}
      className="gallery"
    />
  );
}

export default App;