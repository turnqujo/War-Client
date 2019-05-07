import React from 'react';
import './table-body.css';
import TableCell from './table-cell';
import { Map, List } from 'immutable';

interface Props {
  cells: List<Map<string, React.ReactChild>>;
}

const TableBody: React.FC<Props> = (props: Props) => (
  <tbody className="table-body">
    {props.cells.map((row: Map<string, React.ReactChild>, i: number) => (
      <tr key={i} className="table-body__row">
        {row
          .map((content: React.ReactChild, column: string) => <TableCell key={`${column}-${i}`}>{content}</TableCell>)
          .toList()}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
