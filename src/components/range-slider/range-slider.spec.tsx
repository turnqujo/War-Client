import { shallow } from 'enzyme';
import React from 'react';
import RangeSlider from './range-slider';

describe('The Range control Component', () => {
  test('renders without crashing.', () => {
    shallow(<RangeSlider domain={{ start: 1, end: 100 }} initial={{ start: 1, end: 10 }} onUpdate={() => { }} />);
  });

  test('should match its snapshot.', () => {
    const wrapper = shallow(
      <RangeSlider domain={{ start: 1, end: 100 }} initial={{ start: 1, end: 10 }} onUpdate={() => { }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
