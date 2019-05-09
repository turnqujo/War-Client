import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GameDataTable from './connected/game-data-table/game-data-table';
import configureStore from './redux/store';
import LoadingGraphic from './components/loading-graphic/loading-graphic';

const App: React.FC = () => (
  <div className="app">
    <Provider store={configureStore()}>
      <GameDataTable />
      <LoadingGraphic />
    </Provider>
  </div>
);

export default App;
