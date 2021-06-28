import { filterMapper } from 'utils';

export const initialState = {
  searchTerm: '',
  user: '',
  repo: '',
  currentFilter: 'Last Updated',
  currentKey: 0,
  totalMenu: {
    0: 'Last Updated',
    1: 'Created',
    2: 'Fullname',
    3: 'Pushed'
  },
  currentMenu: {
    1: 'Created',
    2: 'Fullname',
    3: 'Pushed'
  }
};

// ACTION TYPES
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
const SET_USER = 'SET_USER';
const SET_REPO = 'SET_REPO';
const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

// ACTIONS
export const updateSearchTerm = (inputValue) => {
  return { type: UPDATE_SEARCH_TERM, payload: inputValue };
};

export const setUser = (value) => {
  return { type: SET_USER, payload: value };
};

export const setRepo = (value) => {
  return { type: SET_REPO, payload: value };
};
export const setCurrentFilter = (value) => {
  return { type: SET_CURRENT_FILTER, payload: value };
};

// ACTION CREATORS
export const onChangeInputValue = (inputValue) => (dispatch) => {
  return dispatch(updateSearchTerm(inputValue));
};

export const setCurrentUser = (inputValue) => (dispatch) => {
  return dispatch(setUser(inputValue));
};

export const setCurrentRepo = (inputValue) => (dispatch) => {
  return dispatch(setRepo(inputValue));
};

export const changeFilter = (value) => (dispatch) => {
  return dispatch(setCurrentFilter(value));
};

const search = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: (payload) ? payload : ''
      };
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    case SET_REPO:
      return {
        ...state,
        repo: payload
      };
    case SET_CURRENT_FILTER:
      const totalMenu = {...state.totalMenu};
      delete totalMenu[payload]
      return {
        ...state,
        currentFilter: filterMapper(payload),
        currentMenu: totalMenu
      };
    default:
      return state;
  }
};

export default search;
