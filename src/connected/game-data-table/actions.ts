import { Action } from 'redux-actions';

export enum GameDataTableAction {
  changeSortColumn = 'GAME-DATA-TABLE: CHANGE_SORT_COLUMN',
  changeSortDirection = 'GAME-DATA-TABLE: CHANGE_SORT_DIRECTION'
}

export interface ChangeSortColumnPayload {
  newColumn: string;
}
export const changeSortColumn = (newColumn: string): Action<ChangeSortColumnPayload> => ({
  type: GameDataTableAction.changeSortColumn,
  payload: { newColumn }
});

export const changeSortDirection = (): Action<null> => ({
  type: GameDataTableAction.changeSortDirection,
  payload: null
});

export default {
  changeSortColumn,
  changeSortDirection
};
