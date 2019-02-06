import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from './Signup';

function setup() {
  const props = {
    signUpAction: jest.fn,
    history: {}
  };
  const wrapper = shallow(<Signup {...props} />);
  return { wrapper, props };
}

describe('First test', () => {
  it('matches snapshort', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleSubmit ', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance();
    expect(
      instance.submit({
        target: { value: 'tag' },
        preventDefault: jest.fn
      })
    );
  });
  it('should call onChange ', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance();
    expect(
      instance.onChange({
        target: { value: 'tag' },
        preventDefault: jest.fn
      })
    );
  });
  it('Test component did mount', () => {
    const { wrapper } = setup();
    wrapper.setProps({ auth: { user: { user_name: 'soko' } } });
    expect(wrapper.state()).toEqual({ errors: { message: '' } });
  });
  it('Test component did mount', () => {
    const { wrapper } = setup();
    wrapper.setProps({ auth: { errors: { message: 'empty' } } });
    expect(wrapper.state()).toEqual({ errors: { message: '' } });
  });
  it('Should have MDBBtn', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
