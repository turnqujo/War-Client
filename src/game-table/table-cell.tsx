import React from 'react';
import './table-cell.css';

interface Props {
  children: React.ReactChild;
}

const TableCell: React.FC<Props> = (props: Props) => <td className="table-cell">{props.children}</td>;

export default TableCell;
