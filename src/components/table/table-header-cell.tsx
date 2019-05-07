import classnames from 'classnames';
import React from 'react';
import './table-header-cell.css';

interface Props {
  children: React.ReactChild;
  isActiveSort: boolean;
  sortAscending: boolean;
  column: string;
  onToggleSort: (column: string) => void;
}

const TableHeaderCell: React.FC<Props> = (props: Props) => {
  const classes = classnames('table-header-cell', {
    'table-header-cell--asc': props.isActiveSort && props.sortAscending,
    'table-header-cell--desc': props.isActiveSort && !props.sortAscending
  });

  return (
    <th className={classes} onClick={() => props.onToggleSort(props.column)}>
      {props.children}
    </th>
  );
};

export default TableHeaderCell;
