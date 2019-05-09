import React from 'react';
import './loading-graphic.css';

interface Props {}

const LoadingGraphic: React.FC<Props> = (_props: Props) => (
  <svg className="loading-graphic" viewBox="0 0 64 64" preserveAspectRatio="xMinYMin meet">
    <g className="loading-graphic__card left">
      <rect className="loading-graphic__card-outline" x="8" y="24" />
      <text className="loading-graphic__card-suit" x="10" y="32">
        &#9829;
      </text>
      <text className="loading-graphic__card-suit" x="24" y="54">
        &#9829;
      </text>
    </g>
    <g className="loading-graphic__card right">
      <rect className="loading-graphic__card-outline" x="36" y="24" />
      <text className="loading-graphic__card-suit" x="38" y="32">
        &#9827;
      </text>
      <text className="loading-graphic__card-suit" x="52" y="54">
        &#9827;
      </text>
    </g>
  </svg>
);

export default LoadingGraphic;
