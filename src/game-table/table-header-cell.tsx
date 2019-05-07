import React from 'react';
import classnames from 'classnames';

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
    <div className={classes} onClick={() => props.onToggleSort(props.column)}>
      {props.children}
    </div>
  );
};

export default TableHeaderCell;
