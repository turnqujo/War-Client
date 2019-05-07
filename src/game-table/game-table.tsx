import React from 'react';
import { Map, List } from 'immutable';
import TableHeaderCell from './table-header-cell';
import TableCell from './table-cell';

interface Props {
  headerCells?: Map<string, string>;
  cells: List<Map<string, React.ReactChild>>;
  onToggleSort: (column: string) => void;
}

const GameTable: React.FC<Props> = (props: Props) => (
  <div className="game-table">
    {!props.headerCells ? null : (
      <div className="game-table__header">
        {props.headerCells
          .map((label: string, key: string) => (
            <TableHeaderCell key={key} column={key} sortAscending={true} onToggleSort={props.onToggleSort}>
              {label}
            </TableHeaderCell>
          ))
          .toList()}
      </div>
    )}
    {props.cells.map((row: Map<string, React.ReactChild>, i: number) => (
      <div key={i} className="game-table__row">
        {row.map((content: React.ReactChild, column: string) => <TableCell key={column}>{content}</TableCell>).toList()}
      </div>
    ))}
  </div>
);

export default GameTable;
