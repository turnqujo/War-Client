import { shallow } from 'enzyme';
import React from 'react';
import RangeInput from './range-input';

describe('The Range display Component', () => {
  test('renders without crashing.', () => {
    shallow(<RangeInput initialValue={1} maxValue={1} onError={() => {}} onChange={() => {}} />);
  });
});
