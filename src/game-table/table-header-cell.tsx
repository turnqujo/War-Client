import classnames from 'classnames';
import React from 'react';
import './table-header-cell.css';

interface Props {
  children: React.ReactChild;
  sortAscending: boolean;
  column: string;
  onToggleSort: (column: string) => void;
}

const TableHeaderCell: React.FC<Props> = (props: Props) => {
  const classes = classnames('table-header-cell', {
    'table-header-cell--asc': props.sortAscending,
    'table-header-cell--desc': props.sortAscending
  });

  return (
    <th className={classes} onClick={() => props.onToggleSort(props.column)}>
      {props.children}
    </th>
  );
};

export default TableHeaderCell;
