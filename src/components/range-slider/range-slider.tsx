import React from 'react';
import './range-slider.css';

export interface Range {
  start: number;
  end: number;
}

export interface Props {
  domain: Range;
  initial: Range;
  onUpdate: (newRange: Range) => void;
}

const RangeSlider: React.FC<Props> = (_props: Props) => (
  <div className="range-slider">
    <div className="range-slider__knob--left" />
    <div className="range-slider__knob--right" />
  </div>
);

export default RangeSlider;
