import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GameDataTable from './connected/game-data-table/game-data-table';
import configureStore from './redux/store';

const App: React.FC = () => (
  <div className="app">
    <Provider store={configureStore()}>
      <GameDataTable />
    </Provider>
  </div>
);

export default App;
