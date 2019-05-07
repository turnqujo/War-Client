import React, { ChangeEvent } from 'react';
import './range-input.css';

interface Props {
  initialValue: number;
  maxValue: number;
  onError: (error: string) => void;
  onChange: (newVal: number) => void;
}

const RangeInput: React.FC<Props> = (props: Props) => (
  <input
    type="number"
    className="range-input"
    defaultValue={String(props.initialValue)}
    onChange={(event: ChangeEvent<HTMLInputElement>) =>
      handleOnChange(event, props.maxValue, props.onError, props.onChange)
    }
  />
);

const handleOnChange = (
  event: ChangeEvent<HTMLInputElement>,
  maxValue: number,
  onError: (error: string) => void,
  onChange: (newVal: number) => void
): void => {
  const newValue = event.target.value;
  if (!newValue) {
    event.target.classList.add('range-input--error');
    return onError('Input required.');
  }

  const isOnlyNumbers = /^([0-9.-]+)$/.test(newValue);
  if (!isOnlyNumbers) {
    event.target.classList.add('range-input--error');
    return onError('Input must only contain numbers 0 through 9.');
  }

  const convertedValue = +newValue;

  if (typeof convertedValue !== 'number') {
    event.target.classList.add('range-input--error');
    return onError('Input must be a number.');
  }

  if (+convertedValue % 1 !== 0) {
    event.target.classList.add('range-input--error');
    return onError('Input must be a whole number.');
  }

  if (convertedValue < 0) {
    event.target.classList.add('range-input--error');
    return onError('Input must be greater than 0');
  }

  if (convertedValue > maxValue) {
    event.target.classList.add('range-input--error');
    return onError(`Input must be less than ${maxValue}`);
  }

  event.target.classList.remove('range-input--error');
  return onChange(convertedValue);
};

export default RangeInput;
