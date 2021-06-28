import reducer, {
  initialState,
  // Actions
  fetchUsers,
  fetchRepos,
  fetchCommits,
  fetchError,
  isLoading,
  fetchSuccess,
  setNoContent,
  resetState,
  // Middlerware
  resetStore,
  fetchUserList,
  fetchReposList,
  fetchReposListByFilter,
  fetchCommitList
} from './results';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { searchMockStore } from 'mocks';

import * as apiCommit from 'api/github/fetchCommits';
import * as apifetchRepos from 'api/github/fetchRepos';
import * as apifetchUsers from 'api/github/fetchUsers';

describe('Result Reducer', () => {
  describe('Actions', () => {
    it('fetchUsers', () => {
      const actionObj = fetchUsers([]);
      expect(actionObj).toEqual({ type: 'FETCH_USERS', payload: [] });
    });

    it('fetchRepos', () => {
      const actionObj = fetchRepos([]);
      expect(actionObj).toEqual({ type: 'FETCH_REPOS', payload: [] });
    });

    it('fetchCommits', () => {
      const actionObj = fetchCommits([]);
      expect(actionObj).toEqual({ type: 'FETCH_COMMITS', payload: [] });
    });

    it('fetchError', () => {
      const actionObj = fetchError();
      expect(actionObj).toEqual({ type: 'FETCH_ERROR' });
    });

    it('isLoading', () => {
      const actionObj = isLoading();
      expect(actionObj).toEqual({ type: 'IS_LOADING' });
    });

    it('fetchSuccess', () => {
      const actionObj = fetchSuccess();
      expect(actionObj).toEqual({ type: 'FETCH_SUCCESS' });
    });

    it('setNoContent', () => {
      const actionObj = setNoContent();
      expect(actionObj).toEqual({ type: 'NO_CONTENT' });
    });

    it('resetState', () => {
      const actionObj = resetState();
      expect(actionObj).toEqual({ type: 'RESET_STATE' });
    });
  });

  describe('Middleware', () => {
    const mockReduxStore = configureMockStore([thunk]);

    describe('fetchUserList', () => {
      it('No Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apifetchUsers, 'fetchUserListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          return [];
        });

        await store.dispatch(fetchUserList());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'NO_CONTENT' }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apifetchUsers, 'fetchUserListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          return { items: [true] };
        });

        await store.dispatch(fetchUserList());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'FETCH_USERS', payload: [true] }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('Error', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });
        const mockFetchPosts = jest.spyOn(apifetchUsers, 'fetchUserListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          throw new Error('Testing');
        });
        await store.dispatch(fetchUserList());
        const expectedActions = [{ type: 'IS_LOADING' }, { type: 'FETCH_ERROR' }];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('fetchReposList', () => {
      it('No Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apifetchRepos, 'fetchReposListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          return [];
        });

        await store.dispatch(fetchReposList());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'NO_CONTENT' }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apifetchRepos, 'fetchReposListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          return [true];
        });

        await store.dispatch(fetchReposList());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'FETCH_REPOS', payload: [true] }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('Error', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });
        const mockFetchPosts = jest.spyOn(apifetchRepos, 'fetchReposListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          throw new Error('Testing');
        });
        await store.dispatch(fetchReposList());
        const expectedActions = [{ type: 'IS_LOADING' }, { type: 'FETCH_ERROR' }];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('fetchReposListByFilter', () => {
      it('No Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apifetchRepos, 'fetchReposListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          return [];
        });

        await store.dispatch(fetchReposListByFilter());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'NO_CONTENT' }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apifetchRepos, 'fetchReposListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          return [true];
        });

        await store.dispatch(fetchReposListByFilter());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'FETCH_REPOS', payload: [true] }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
      it('Error', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });
        const mockFetchPosts = jest.spyOn(apifetchRepos, 'fetchReposListFromGithub');
        mockFetchPosts.mockImplementation(() => {
          throw new Error('Testing');
        });
        await store.dispatch(fetchReposListByFilter());
        const expectedActions = [{ type: 'IS_LOADING' }, { type: 'FETCH_ERROR' }];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('fetchCommitList', () => {
      it('No Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apiCommit, 'fetchCommitsFromGithubForRepo');
        mockFetchPosts.mockImplementation(() => {
          return [];
        });

        await store.dispatch(fetchCommitList());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'NO_CONTENT' }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('Content', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });

        const mockFetchPosts = jest.spyOn(apiCommit, 'fetchCommitsFromGithubForRepo');
        mockFetchPosts.mockImplementation(() => {
          return [true];
        });

        await store.dispatch(fetchCommitList());

        const expectedActions = [
          { type: 'IS_LOADING' },
          { type: 'FETCH_SUCCESS' },
          { type: 'FETCH_COMMITS', payload: [true] }
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
      it('Error', async () => {
        const store = mockReduxStore({
          results: initialState,
          search: searchMockStore
        });
        const mockFetchPosts = jest.spyOn(apiCommit, 'fetchCommitsFromGithubForRepo');
        mockFetchPosts.mockImplementation(() => {
          throw new Error('Testing');
        });
        await store.dispatch(fetchCommitList());
        const expectedActions = [{ type: 'IS_LOADING' }, { type: 'FETCH_ERROR' }];
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('resetStore', async () => {
      const store = mockReduxStore({
        results: initialState,
        search: searchMockStore
      });
      await store.dispatch(resetStore());
      const expectedActions = [{ type: 'RESET_STATE' }];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Reducer', () => {
    it('default state', () => {
      const defaultState = reducer(undefined, {});
      expect(defaultState).toEqual(initialState);
    });

    it('RESET_STATE', () => {
      const defaultState = reducer({ ...initialState }, { type: 'RESET_STATE' });
      expect(defaultState).toEqual(initialState);
    });

    it('NO_CONTENT', () => {
      const defaultState = reducer({ ...initialState }, { type: 'NO_CONTENT' });
      expect(defaultState).toEqual({ ...initialState, content: false });
    });

    it('IS_LOADING', () => {
      const defaultState = reducer({ ...initialState }, { type: 'IS_LOADING' });
      expect(defaultState).toEqual({ ...initialState, loading: true });
    });

    it('FETCH_SUCCESS', () => {
      const defaultState = reducer({ ...initialState }, { type: 'FETCH_SUCCESS' });
      expect(defaultState).toEqual({
        ...initialState,
        success: true,
        error: false,
        loading: false
      });
    });

    it('FETCH_ERROR', () => {
      const defaultState = reducer({ ...initialState }, { type: 'FETCH_ERROR' });
      expect(defaultState).toEqual({ ...initialState, error: true });
    });

    it('FETCH_COMMITS', () => {
      const defaultState = reducer({ ...initialState }, { type: 'FETCH_COMMITS', payload: [true] });
      expect(defaultState).toEqual({ ...initialState, commitList: [true] });
    });

    it('FETCH_REPOS', () => {
      const defaultState = reducer({ ...initialState }, { type: 'FETCH_REPOS', payload: [true] });
      expect(defaultState).toEqual({ ...initialState, repoList: [true] });
    });

    it('FETCH_USERS', () => {
      const defaultState = reducer({ ...initialState }, { type: 'FETCH_USERS', payload: [true] });
      expect(defaultState).toEqual({ ...initialState, userList: [true] });
    });
  });
});
