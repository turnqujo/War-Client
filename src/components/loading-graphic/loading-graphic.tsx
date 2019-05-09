import React from 'react';
import CardIcon, { Side, Suit } from './card-icon';
import './loading-graphic.css';

interface Props {}

const LoadingGraphic: React.FC<Props> = (_props: Props) => (
  <svg className="loading-graphic" viewBox="0 0 64 64" preserveAspectRatio="xMinYMin meet">
    <g transform="translate(4, 16)">
      <CardIcon rank={'A'} suit={Suit.spades} side={Side.left} />
    </g>
    <g transform="translate(36, 16)">
      <CardIcon rank="10" suit={Suit.diamonds} side={Side.right} />
    </g>
  </svg>
);

export default LoadingGraphic;
