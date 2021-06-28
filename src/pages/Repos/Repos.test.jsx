import React from 'react';
import { mount } from 'enzyme';
import { Repos } from 'pages';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { resultsMockStoreForContainer, searchMockStore } from 'mocks';
import { BrowserRouter } from 'react-router-dom';

// jest.mock('../../containers/ReposResult/ReposResultConatiner', () => <div>Testing</div>);
describe('<Repos />', () => {
  const mockReduxStore = configureStore([thunk]);

  const store = mockReduxStore({
    results: resultsMockStoreForContainer,
    search: searchMockStore
  });
  it('Renders' , () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Repos />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
