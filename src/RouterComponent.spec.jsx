import React from 'react';
import { shallow } from 'enzyme';

import RouterComponent from './RouterComponent';

function setup() {
  const props = {
    signUpAction: jest.fn,
    history: {}
  };
  const wrapper = shallow(<RouterComponent />);
  return { wrapper, props };
}

describe('First test', () => {
  it('matches snapshort', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
