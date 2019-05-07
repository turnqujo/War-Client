import React from 'react';
import './App.css';
import RangeDisplay from './components/range-control/range-control';
import { Range } from './models/range';
import GameTable from './game-table/game-table';
import { Map, List } from 'immutable';

const App: React.FC = () => {
  const domain: Range = { start: 1, end: 100 };
  const initial: Range = { start: 1, end: 10 };

  const header = Map({ 'turn-col': 'Turn' });
  const cells = List([Map({ 'turn-col': 0 }), Map({ 'turn-col': 1 }), Map({ 'turn-col': 2 }), Map({ 'turn-col': 3 })]);

  return (
    <div className="app">
      <RangeDisplay domain={domain} initial={initial} onChange={(newRange: Range) => console.log(newRange)} />
      <GameTable headerCells={header} cells={cells} onToggleSort={console.log} />
    </div>
  );
};

export default App;
