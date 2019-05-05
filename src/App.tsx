import React from 'react';
import './App.css';
import RangeDisplay from './components/range-display/range-display';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RangeDisplay start={1} end={10} />
      </header>
    </div>
  );
};

export default App;
