import classNames from 'classnames';
import React from 'react';
import './card-icon.css';

export enum Suit {
  hearts = '\u2665',
  spades = '\u2660',
  diamonds = '\u2666',
  clubs = '\u2663'
}

const suitColorClass = (suit: Suit): string =>
  Object.keys(Suit).find((suitKey: string) => Suit[suitKey as any] === suit) || '';

interface Props {
  rank: number | string;
  suit: Suit;
  isFaceUp: boolean;
}

const CardIcon: React.FC<Props> = (props: Props) => (
  <svg className={classNames('card-icon', suitColorClass(props.suit))}>
    <defs>
      <pattern id="card-back" patternUnits="userSpaceOnUse" width="6" height="8">
        <g className="card-icon__pattern">
          <rect className="card-icon__pattern-background" />
          <circle className="card-icon__pattern-circle" cx="3" cy="4" r="2" />
        </g>
      </pattern>
    </defs>
    <rect className={classNames('card-icon__outline', { 'card-icon__outline--back': !props.isFaceUp })} />
    {!props.isFaceUp ? null : (
      <g>
        <g className="card-icon__identity-container" transform="translate(6, 8)">
          <text textAnchor="middle" className="card-icon__rank">
            {props.rank}
          </text>
          <text textAnchor="middle" className="card-icon__suit" dy="8">
            {props.suit}
          </text>
        </g>
        <g className="card-icon__identity-container" transform="translate(18, 24) rotate(180)">
          <text textAnchor="middle" className="card-icon__rank">
            {props.rank}
          </text>
          <text textAnchor="middle" className="card-icon__suit" dy="8">
            {props.suit}
          </text>
        </g>
      </g>
    )}
  </svg>
);

export default CardIcon;
