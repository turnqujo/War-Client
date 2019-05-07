import React from 'react';
import './App.css';
import RangeDisplay from './components/range-control/range-control';
import { Range } from './models/range';
import GameTable from './game-table/game-table';
import { Map, List } from 'immutable';

const App: React.FC = () => {
  const domain: Range = { start: 1, end: 100 };
  const initial: Range = { start: 1, end: 10 };

  const header = Map({ 'turn-col': 'Turn', 'players-remaining': 'Players Remaining' });
  const cells = List([
    Map({ 'turn-col': 0, 'players-remaining': 4 }),
    Map({ 'turn-col': 1, 'players-remaining': 2 }),
    Map({ 'turn-col': 2, 'players-remaining': 2 }),
    Map({ 'turn-col': 3, 'players-remaining': 1 })
  ]);

  return (
    <div className="app">
      <RangeDisplay domain={domain} initial={initial} onChange={(newRange: Range) => console.log(newRange)} />
      <hr />
      <GameTable headerCells={header} cells={cells} onToggleSort={console.log} />
    </div>
  );
};

export default App;
