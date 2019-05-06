import { shallow } from 'enzyme';
import React from 'react';
import RangeDisplay from './range-display';

describe('The Range display Component', () => {
  test('renders without crashing.', () => {
    shallow(<RangeDisplay start={1} end={10} />);
  });

  test('should match its snapshot.', () => {
    const wrapper = shallow(<RangeDisplay start={1} end={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});
