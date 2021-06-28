import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { SearchResultContainer } from 'containers';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { resultsMockStore, searchMockStore, resultsMockStoreForContainer } from 'mocks';
describe('<SearchResultContainer />', () => {
  const mockReduxStore = configureStore([thunk]);

  it('Renders', () => {
    const store = mockReduxStore({
      results: resultsMockStore,
      search: searchMockStore
    });
    const wrapper = mount(
      <Provider store={store}>
        <SearchResultContainer />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('On Click Button action', () => {
    const store = mockReduxStore({
      results: resultsMockStoreForContainer,
      search: searchMockStore
    });

    let wrapper;

    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <SearchResultContainer />
          </BrowserRouter>
        </Provider>
      );
      const card = wrapper.find('.card-container').first();
      card.simulate('click');
    })


    const expectedActions = [
      { type: 'SET_USER', payload: 'react' }, { type: 'IS_LOADING' }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
