import { Map } from 'immutable';
import React from 'react';
import TableHeaderCell from './table-header-cell';
import './table-header.css';

interface Props {
  headerCells: Map<string, string>;
  onToggleSort: (column: string) => void;
  sortAscending?: boolean;
  sortColumn?: string;
}

const TableHeader: React.FC<Props> = (props: Props) => (
  <thead className="table-header">
    <tr className="table-header__row">
      {props.headerCells
        .map((label: string, key: string) => (
          <TableHeaderCell
            key={key}
            column={key}
            isActiveSort={key === props.sortColumn}
            sortAscending={!!props.sortAscending}
            onToggleSort={props.onToggleSort}
          >
            {label}
          </TableHeaderCell>
        ))
        .toList()}
    </tr>
  </thead>
);

export default TableHeader;
