import reducer, {
  initialState,
  // Actions
  updateSearchTerm,
  setUser,
  setRepo,
  setCurrentFilter,
  // Middleware
  onChangeInputValue,
  setCurrentUser,
  setCurrentRepo,
  changeFilter
} from './search';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { resultsMockStore } from 'mocks';
import * as utils from 'utils';

describe('Search Reducer', () => {
  describe('Actions', () => {
    it('updateSearchTerm', () => {
      const actionObj = updateSearchTerm('test');
      expect(actionObj).toEqual({ type: 'UPDATE_SEARCH_TERM', payload: 'test' });
    });

    it('setUser', () => {
      const actionObj = setUser('test');
      expect(actionObj).toEqual({ type: 'SET_USER', payload: 'test' });
    });

    it('setRepo', () => {
      const actionObj = setRepo('test');
      expect(actionObj).toEqual({ type: 'SET_REPO', payload: 'test' });
    });

    it('setCurrentFilter', () => {
      const actionObj = setCurrentFilter('test');
      expect(actionObj).toEqual({ type: 'SET_CURRENT_FILTER', payload: 'test' });
    });
  });

  describe('Middleware', () => {
    const mockReduxStore = configureMockStore([thunk]);
    it('onChangeInputValue', async () => {
      const store = mockReduxStore({
        search: initialState,
        results: resultsMockStore
      });
      await store.dispatch(onChangeInputValue('test'));
      const expectedActions = [{ type: 'UPDATE_SEARCH_TERM', payload: 'test' }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('setCurrentUser', async () => {
      const store = mockReduxStore({
        search: initialState,
        results: resultsMockStore
      });
      await store.dispatch(setCurrentUser('test'));
      const expectedActions = [{ type: 'SET_USER', payload: 'test' }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('setCurrentRepo', async () => {
      const store = mockReduxStore({
        search: initialState,
        results: resultsMockStore
      });
      await store.dispatch(setCurrentRepo('test'));
      const expectedActions = [{ type: 'SET_REPO', payload: 'test' }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('changeFilter', async () => {
      const store = mockReduxStore({
        search: initialState,
        results: resultsMockStore
      });
      await store.dispatch(changeFilter('test'));
      const expectedActions = [{ type: 'SET_CURRENT_FILTER', payload: 'test' }];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Reducer', () => {
    it('default state', () => {
      const defaultState = reducer(undefined, {});
      expect(defaultState).toEqual(initialState);
    });

    it('UPDATE_SEARCH_TERM - Undefined', () => {
      const defaultState = reducer(
        { ...initialState },
        { type: 'UPDATE_SEARCH_TERM', payload: undefined }
      );
      expect(defaultState).toEqual(initialState);
    });

    it('UPDATE_SEARCH_TERM - Defined', () => {
      const defaultState = reducer(
        { ...initialState },
        { type: 'UPDATE_SEARCH_TERM', payload: 'test' }
      );
      expect(defaultState).toEqual({ ...initialState, searchTerm: 'test' });
    });

    it('SET_USER', () => {
      const defaultState = reducer({ ...initialState }, { type: 'SET_USER', payload: 'test' });
      expect(defaultState).toEqual({ ...initialState, user: 'test' });
    });

    it('SET_REPO', () => {
      const defaultState = reducer({ ...initialState }, { type: 'SET_REPO', payload: 'test' });
      expect(defaultState).toEqual({ ...initialState, repo: 'test' });
    });

    it('SET_CURRENT_FILTER', () => {
      const totalMenu = { ...initialState.totalMenu };
      delete totalMenu[1];
      const defaultState = reducer({ ...initialState }, { type: 'SET_CURRENT_FILTER', payload: 1 });
      expect(defaultState).toEqual({
        ...initialState,
        currentFilter: 'created',
        currentMenu: totalMenu
      });
    });
  });
});
