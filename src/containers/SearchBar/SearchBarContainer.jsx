import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchReducer from 'reducers/search/search';
import * as resultReducer from 'reducers/results/results';
import { SearchButton, SearchInput } from 'components';

const SearchBarContainer = () => {
  const [recentSearch, setRecentSearch] = useState({});

  const searchStore = useSelector((state) => state.search);
  // const resultStore = useSelector((state) => state.results);
  const { searchTerm } = searchStore;
  // const { loading } = resultStore;
  const dispatch = useDispatch();
  const { onChangeInputValue, fetchUserList } = bindActionCreators(
    { ...searchReducer, ...resultReducer },
    dispatch
  );

  const onClickSearch = (event) => {
    event.preventDefault();
    let history = recentSearch ? recentSearch : {};
    if (searchTerm !== '') {
      history[searchTerm] = { value: searchTerm };
      localStorage.setItem('history', JSON.stringify(history));
    }
    fetchUserList(searchTerm);
  };

  const onChangeInput = (event) => {
    onChangeInputValue(event);
  };

  const onSelectSuggestion = (data) => {
    fetchUserList(data);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClickSearch(event);
    }
  };

  const clearRecentSuggestion = () => {
    localStorage.clear();
    setRecentSearch({});
  };

  useEffect(() => {
    let data = localStorage.getItem('history');
    const recentSearchList = JSON.parse(data) ? JSON.parse(data) : {};
    setRecentSearch(recentSearchList);
  }, []);

  return (
    <div className="d-flex align-items-center">
      <SearchInput
        onChange={onChangeInput}
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onSelect={onSelectSuggestion}
        recentSearch={recentSearch}
        clearRecentSuggestion={clearRecentSuggestion}
      />

      <SearchButton onClick={onClickSearch} disabled={searchTerm.length > 0 ? false : true} />
    </div>
  );
};

export default SearchBarContainer;
