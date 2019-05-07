import React from 'react';

interface Props {
  children: React.ReactChild;
}

const TableCell: React.FC<Props> = (props: Props) => <div className="table-cell">{props.children}</div>;

export default TableCell;
