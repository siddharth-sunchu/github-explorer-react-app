import {
  fetchUserListFromGithub,
  fetchReposListFromGithub,
  fetchCommitsFromGithubForRepo
} from 'api';

export const initialState = {
  error: false,
  success: false,
  loading: false,
  content: true,
  userList: [],
  repoList: [],
  commitList: []
};

const FETCH_ERROR = 'FETCH_ERROR';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const IS_LOADING = 'IS_LOADING';
const NO_CONTENT = 'NO_CONTENT';
const FETCH_USERS = 'FETCH_USERS';
const FETCH_REPOS = 'FETCH_REPOS';
const FETCH_COMMITS = 'FETCH_COMMITS';
const RESET_STATE = 'RESET_STATE';

export const fetchUsers = (userList) => {
  return { type: FETCH_USERS, payload: userList };
};

export const fetchRepos = (repoList) => {
  return { type: FETCH_REPOS, payload: repoList };
};

export const fetchCommits = (commitList) => {
  return { type: FETCH_COMMITS, payload: commitList };
};

export const fetchError = () => {
  return { type: FETCH_ERROR };
};

export const isLoading = () => {
  return { type: IS_LOADING };
};

export const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};

export const setNoContent = () => {
  return { type: NO_CONTENT };
};

export const resetState = () => {
  return { type: RESET_STATE };
};

export const resetStore = () => (dispatch) =>{
  return dispatch(resetState())
}

export const fetchUserList = () => async (dispatch, getState) => {
  try {
    dispatch(isLoading());
    const { search } = getState();
    const { searchTerm } = search;
    let response = await fetchUserListFromGithub(searchTerm);
    dispatch(fetchSuccess());
    if (response.length === 0) {
      dispatch(setNoContent());
    } else {
      dispatch(fetchUsers(response.items));
    }
  } catch (error) {
    return dispatch(fetchError());
  }
};

export const fetchReposList = () => async (dispatch, getState) => {
  try {
    dispatch(isLoading());
    const { search } = getState();
    const { user } = search;
    const response = await fetchReposListFromGithub(user);
    dispatch(fetchSuccess());
    if (response.length === 0) {
      dispatch(setNoContent());
    } else {
      dispatch(fetchRepos(response));
    }
  } catch (error) {
    return dispatch(fetchError());
  }
};

export const fetchReposListByFilter = () => async (dispatch, getState) => {
  try {
    dispatch(isLoading());
    const { search } = getState();
    const { user, currentFilter } = search;
    const response = await fetchReposListFromGithub(user, currentFilter);
    dispatch(fetchSuccess());
    if (response.length === 0) {
      dispatch(setNoContent());
    } else {
      dispatch(fetchRepos(response));
    }
  } catch (error) {
    return dispatch(fetchError());
  }
};

export const fetchCommitList = () => async (dispatch, getState) => {
  try {
    dispatch(isLoading());
    const { search } = getState();
    const { user, repo } = search;
    const response = await fetchCommitsFromGithubForRepo(user, repo);
    dispatch(fetchSuccess());
    if (response.length === 0) {
      dispatch(setNoContent());
    } else {
      dispatch(fetchCommits(response));
    }
  } catch (error) {
    return dispatch(fetchError());
  }
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        userList: action.payload
      };
    case FETCH_REPOS:
      return {
        ...state,
        repoList: action.payload
      };
    case FETCH_COMMITS:
      return {
        ...state,
        commitList: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        loading: false
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    case NO_CONTENT:
      return {
        ...state,
        content: false
      };
    case RESET_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default results;
