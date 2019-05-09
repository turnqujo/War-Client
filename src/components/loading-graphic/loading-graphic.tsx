import React from 'react';
import CardIcon, { Suit } from '../card-icon/card-icon';
import './loading-graphic.css';

interface Props {}

const LoadingGraphic: React.FC<Props> = (_props: Props) => (
  <svg className="loading-graphic" viewBox="0 0 64 64" preserveAspectRatio="xMinYMin meet">
    <g transform="translate(4, 16)">
      <g className="loading-graphic__card-container left">
        <CardIcon rank="Q" suit={Suit.spades} isFaceUp={false} />
      </g>
    </g>
    <g transform="translate(36, 16)">
      <g className="loading-graphic__card-container right">
        <CardIcon rank="10" suit={Suit.diamonds} isFaceUp={true} />
      </g>
    </g>
  </svg>
);

export default LoadingGraphic;
