import { shallow } from 'enzyme';
import React from 'react';
import RangeDisplay from './range-display';

describe('The Range display Component', () => {
  test('renders without crashing', () => {
    shallow(<RangeDisplay start={1} end={10} />);
  });

  test('Displays the given start and end turn numbers as expected.', () => {
    const wrapper = shallow(<RangeDisplay start={1} end={10} />);

    expect(wrapper.find({ 'test-id': 'start' }).text()).toBe(1);
  });
});
