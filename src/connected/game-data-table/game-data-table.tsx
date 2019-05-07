import { List, Map } from 'immutable';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import RangeControl from '../../components/range-control/range-control';
import Table from '../../components/table/table';
import { Range } from '../../models/range';
import GameDataTableActions from './actions';
import * as state from './reducer';

interface Props {
  sortColumn: string;
  sortAscending: boolean;
}

const mapStateToProps = (store: any): Props => ({
  sortColumn: store.gameDataTable.get(state.StateKeys.sortColumn),
  sortAscending: store.gameDataTable.get(state.StateKeys.sortAscending)
});

const mapDispatchToProps = (dispatch: Dispatch): typeof GameDataTableActions =>
  bindActionCreators({ ...GameDataTableActions }, dispatch);

// TODO: Get these in state
const domain: Range = { start: 1, end: 100 };
const initial: Range = { start: 1, end: 10 };
const header = Map({ [state.GameColumn.turn]: 'Turn', [state.GameColumn.playersRemaining]: 'Players Remaining' });
const cells = List([
  Map({ [state.GameColumn.turn]: 0, [state.GameColumn.playersRemaining]: 4 }),
  Map({ [state.GameColumn.turn]: 1, [state.GameColumn.playersRemaining]: 2 }),
  Map({ [state.GameColumn.turn]: 2, [state.GameColumn.playersRemaining]: 2 }),
  Map({ [state.GameColumn.turn]: 3, [state.GameColumn.playersRemaining]: 1 })
]);

type ConnectedDispatch = Props & typeof GameDataTableActions;
const GameDataTable: React.FC<ConnectedDispatch> = (props: ConnectedDispatch) => (
  <div className="game-data-table">
    <RangeControl domain={domain} initial={initial} onChange={(newRange: Range) => console.log(newRange)} />
    <Table
      headerCells={header}
      sortColumn={props.sortColumn}
      sortAscending={props.sortAscending}
      cells={cells}
      onToggleSort={(col: string) =>
        col === props.sortColumn ? props.changeSortDirection() : props.changeSortColumn(col)
      }
    />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDataTable);
