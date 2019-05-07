import { combineReducers } from 'redux';
import gameDataTable from '../connected/game-data-table/reducer';

const combinedReducer = combineReducers({ gameDataTable });

export default combinedReducer;
