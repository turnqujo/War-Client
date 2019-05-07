import { shallow } from 'enzyme';
import React from 'react';
import RangeControl from './range-control';

describe('The Range display Component', () => {
  const usualDomain = { start: 1, end: 100 };
  const usualInitial = { start: 1, end: 10 };

  test('renders without crashing.', () => {
    shallow(<RangeControl domain={usualDomain} initial={usualInitial} onChange={() => {}} />);
  });
});
