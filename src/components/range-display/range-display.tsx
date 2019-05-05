import React from 'react';
import './range-display.css';

export interface Props {
  start: number;
  end: number;
}

const RangeDisplay: React.FC<Props> = (props: Props) => (
  <div className="range-display">
    <h3 className="range-display__header">Turns</h3>
    <span className="range-display__counter">
      {props.start}&nbsp;-&nbsp;{props.end}
    </span>
  </div>
);

export default RangeDisplay;
