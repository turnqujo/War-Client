import { List, Map } from 'immutable';
import React from 'react';
import './table.css';
import TableHeader from './table-header';
import TableBody from './table-body';

interface Props {
  cells: List<Map<string, React.ReactChild>>;
  headerCells?: Map<string, string>;
  onToggleSort: (column: string) => void;
  sortAscending?: boolean;
  sortColumn?: string;
}

const Table: React.FC<Props> = (props: Props) => (
  <table className="table">
    {!props.headerCells ? null : (
      <TableHeader
        headerCells={props.headerCells}
        onToggleSort={props.onToggleSort}
        sortAscending={props.sortAscending}
        sortColumn={props.sortColumn}
      />
    )}
    <TableBody cells={props.cells} />
  </table>
);

export default Table;
