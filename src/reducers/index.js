import { combineReducers } from 'redux';
import search from './search/search';
import results from './results/results';
const rootReducer = combineReducers({
    search,
    results
});

export default rootReducer;