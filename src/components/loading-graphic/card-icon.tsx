import React from 'react';
import classNames from 'classnames';
import './card-icon.css';

export enum Suit {
  hearts = '\u2665',
  spades = '\u2660',
  diamonds = '\u2666',
  clubs = '\u2663'
}

const suitColorClass = (suit: Suit): string =>
  Object.keys(Suit).find((suitKey: string) => Suit[suitKey as any] === suit) || '';

export enum Side {
  left = 'left',
  right = 'right'
}

interface Props {
  rank: number | string;
  suit: Suit;
  side: Side;
}

const CardIcon: React.FC<Props> = (props: Props) => (
  <g className={classNames('card-icon', props.side, suitColorClass(props.suit))} transform="translate(0, 0)">
    <rect className="card-icon__outline" />
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
);

export default CardIcon;
