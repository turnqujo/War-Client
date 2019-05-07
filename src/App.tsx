import React from 'react';
import './App.css';
import RangeDisplay from './components/range-control/range-control';
import { Range } from './models/range';

const App: React.FC = () => {
  const domain: Range = { start: 1, end: 100 };
  const initial: Range = { start: 1, end: 10 };
  return (
    <div className="App">
      <header className="App-header">
        <div className="example-container">
          <RangeDisplay domain={domain} initial={initial} onChange={(newRange: Range) => console.log(newRange)} />
        </div>
      </header>
    </div>
  );
};

export default App;
