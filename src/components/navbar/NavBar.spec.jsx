import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';

function setup() {
  const props = {
    toggleCollapse: jest.fn,
    history: {}
  };
  const wrapper = shallow(<NavBar {...props} />);
  return { wrapper, props };
}

describe('First test', () => {
  it('matches snapshort', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('should call toggleCollapse ', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance();
    expect(
      instance.toggleCollapse({
        target: { value: 'tag' },
        preventDefault: jest.fn
      })
    );
  });
});
