import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchReducer from 'reducers/search/search';
import * as resultReducer from 'reducers/results/results';
import { RepoCard, DropdownFilter } from 'components';
import { ContentWrapperContainer } from 'containers';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Divider } from 'antd';

const ReposResultConatiner = () => {
  const { results, search } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    setCurrentUser,
    setCurrentRepo,
    fetchCommitList,
    fetchReposListByFilter,
    fetchReposList,
    changeFilter
  } = bindActionCreators({ ...searchReducer, ...resultReducer }, dispatch);
  const { repoList, content } = results;
  const { user, currentFilter, currentMenu } = search;
  const fetchCommitListForRepo = (repo) => {
    setCurrentRepo(repo);
    fetchCommitList();
  };

  const params = useParams();
  useEffect(() => {
    if ((user === '' && params.user !== '')) {
      setCurrentUser(params.user);
      setCurrentRepo(params.repo);
      if (repoList.length === 0 && content) {
        fetchReposList();
      }
    }
  });

  return (
    <ContentWrapperContainer>
      <div>
        <span className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <NavLink exact to="/" style={{ marginRight: '100px' }}>
            Home
          </NavLink>
          <span style={{ marginRight: '5px' }}>Filter By:</span>
          <DropdownFilter onClick={fetchReposListByFilter} onChange={changeFilter} currentFilter={currentFilter} currentMenu={currentMenu}/>
        </span>
        <h1 className="d-flex justify-content-center align-items-center">{user} repositories</h1>
        <Divider />
        {repoList.map((eachRepoData, key) => {
          return <RepoCard repoData={eachRepoData} onClick={fetchCommitListForRepo} key={key} />;
        })}
      </div>
    </ContentWrapperContainer>
  );
};

export default ReposResultConatiner;
