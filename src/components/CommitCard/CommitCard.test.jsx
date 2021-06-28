import React from 'react';
import { mount } from 'enzyme';
import { CommitCard } from 'components';
import {mockCommitData} from 'mocks'

describe('<CommitCard />', () => {

  const mockFunction = jest.fn();
  it('Renders', () => {
    const wrapper = mount(<CommitCard commitData={mockCommitData} onClickCommit={mockFunction} ></CommitCard>);
    expect(wrapper.exists()).toBe(true);
  });

  // it('OnClick', () => {
    
  //   const wrapper = mount(<CommitCard commitData={mockCommitData} onClickCommit={mockFunction}></CommitCard>);
  //   expect(wrapper.exists()).toBe(true);
  // });
});
