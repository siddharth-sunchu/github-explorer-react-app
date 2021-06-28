import React from 'react';
import { mount } from 'enzyme';
import { DefaultLayout } from 'layouts';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { resultsMockStoreForContainer, searchMockStore } from 'mocks';
import { BrowserRouter } from 'react-router-dom';

describe('<DefaultLayout />', () => {
  const mockReduxStore = configureStore([thunk]);

  const store = mockReduxStore({
    results: resultsMockStoreForContainer,
    search: searchMockStore
  });
  it('Renders' , () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DefaultLayout />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
