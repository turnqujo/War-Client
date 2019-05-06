import React from 'react';
import './App.css';
import RangeSlider from './components/range-slider/range-slider';
import RangeDisplay from './components/range-display/range-display';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="example-container">
          <RangeDisplay start={1} end={10} />
          <RangeSlider domain={{ start: 1, end: 100 }} initial={{ start: 1, end: 10 }} onUpdate={console.log} />
        </div>
      </header>
    </div>
  );
};

export default App;
