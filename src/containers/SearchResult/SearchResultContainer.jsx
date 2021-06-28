import React from 'react';
import { UserCard } from 'components';
import { ContentWrapperContainer } from 'containers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchReducer from 'reducers/search/search';
import * as resultReducer from 'reducers/results/results';

const SearchResultContainer = () => {
  const resultsStore = useSelector((state) => state.results);
  const { userList } = resultsStore;
  const dispatch = useDispatch();
  const { setCurrentUser, fetchReposList } = bindActionCreators(
    { ...searchReducer, ...resultReducer },
    dispatch
  );
  const fetchReposListForUser = (user) => {
    setCurrentUser(user);
    fetchReposList();
  };
  return (
    <ContentWrapperContainer>
      <div className="container">
        {userList.map((eachResult, index) => {
          return <UserCard data={eachResult} key={index} onClick={fetchReposListForUser} />;
        })}
      </div>
    </ContentWrapperContainer>
  );
};

export default SearchResultContainer;
