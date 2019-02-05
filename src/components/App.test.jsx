import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image'
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
}

describe('First test', () => {
  it('Should have div', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
