import { fromJS, Map } from 'immutable';
import { Reducer, AnyAction } from 'redux';
import { GameDataTableAction } from './actions';

export enum GameColumn {
  turn = 'turn',
  playersRemaining = 'players-remaining'
}

export enum StateKeys {
  sortColumn = 'sortColumn',
  sortAscending = 'sortAscending'
}

const initialState = fromJS({
  [StateKeys.sortColumn]: GameColumn.turn,
  [StateKeys.sortAscending]: true
});

const gameDatatable: Reducer<Map<StateKeys, any>> = (
  state: Map<StateKeys, any> = initialState,
  action: AnyAction
): Map<StateKeys, any> => {
  switch (action.type) {
    case GameDataTableAction.changeSortColumn:
      return state.set(StateKeys.sortColumn, action.payload.newColumn);
    case GameDataTableAction.changeSortDirection:
      return state.update(StateKeys.sortAscending, () => !state.get(StateKeys.sortAscending));
    default:
      return state;
  }
};

export default gameDatatable;
