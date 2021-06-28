import React from 'react';
import { mount } from 'enzyme';
import { CardWrapper } from 'components';

describe('<CardWrapper />', () => {
  it('Renders', () => {
    const wrapper = mount(<CardWrapper><div></div></CardWrapper>);
    expect(wrapper.exists()).toBe(true);
  });
});
