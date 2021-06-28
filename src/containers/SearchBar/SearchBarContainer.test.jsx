import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { SearchBarContainer } from 'containers';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { resultsMockStore, searchMockStore, searchMockStoreForContainer } from 'mocks';
describe('<SearchBarContainer />', () => {
  const mockReduxStore = configureStore([thunk]);

  it('Renders', () => {
    const store = mockReduxStore({
      results: resultsMockStore,
      search: searchMockStore
    });
    const wrapper = mount(
      <Provider store={store}>
        <SearchBarContainer />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('On Click Button action', () => {
    const store = mockReduxStore({
      results: resultsMockStore,
      search: searchMockStoreForContainer
    });

    let wrapper;

    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <SearchBarContainer />
        </Provider>
      );
    });

    act(() => {
      const button = wrapper.find('button');
      button.simulate('click');
    });

    const expectedActions = [{ type: 'IS_LOADING' }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('On Change action', () => {
    const store = mockReduxStore({
      results: resultsMockStore,
      search: searchMockStore
    });

    let wrapper;

    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <SearchBarContainer />
        </Provider>
      );
    });

    act(() => {
      const input = wrapper.find('input');
      input.simulate('change', {
        target: {
          value: 'test'
        }
      });
    })

    const expectedActions = [{ type: 'UPDATE_SEARCH_TERM', payload: 'test' }];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
