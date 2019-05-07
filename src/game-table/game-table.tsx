import { List, Map } from 'immutable';
import React from 'react';
import './game-table.css';
import TableCell from './table-cell';
import TableHeaderCell from './table-header-cell';

interface Props {
  headerCells?: Map<string, string>;
  cells: List<Map<string, React.ReactChild>>;
  onToggleSort: (column: string) => void;
}

const GameTable: React.FC<Props> = (props: Props) => (
  <table className="game-table">
    {!props.headerCells ? null : (
      <thead className="game-table__header">
        {props.headerCells
          .map((label: string, key: string) => (
            <TableHeaderCell key={key} column={key} sortAscending={true} onToggleSort={props.onToggleSort}>
              {label}
            </TableHeaderCell>
          ))
          .toList()}
      </thead>
    )}
    {props.cells.map((row: Map<string, React.ReactChild>, i: number) => (
      <tbody key={i} className="game-table__row">
        {row.map((content: React.ReactChild, column: string) => <TableCell key={column}>{content}</TableCell>).toList()}
      </tbody>
    ))}
  </table>
);

export default GameTable;
