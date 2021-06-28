import React from 'react';
import { mount } from 'enzyme';
import { Home } from 'pages';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { resultsMockStoreForContainer, searchMockStore } from 'mocks';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  const mockReduxStore = configureStore([thunk]);

  const store = mockReduxStore({
    results: resultsMockStoreForContainer,
    search: searchMockStore
  });
  it('Renders' , () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
