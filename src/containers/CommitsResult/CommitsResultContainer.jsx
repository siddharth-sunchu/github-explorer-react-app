import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchReducer from 'reducers/search/search';
import * as resultReducer from 'reducers/results/results';
import { CommitCard } from 'components';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ContentWrapperContainer } from 'containers';
import { Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const CommitsResultConatiner = () => {
  const resultStore = useSelector((state) => state.results);
  const searchStore = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { setCurrentRepo, setCurrentUser, fetchCommitList } = bindActionCreators(
    { ...searchReducer, ...resultReducer },
    dispatch
  );
  const { commitList, content } = resultStore;
  const { user, repo } = searchStore;
  const onClickCommit = (url) => {
    window.location = url;
  };

  const params = useParams();
  useEffect(() => {
    if ((user === '' && params.user !== '') || (repo === '' && params.repo !== '')) {
      setCurrentUser(params.user);
      setCurrentRepo(params.repo);
      if (commitList.length === 0 && content) {
        fetchCommitList();
      }
    }
  });

  return (
    <ContentWrapperContainer>
      <div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <NavLink exact to="/" className="text-primary" style={{ marginRight: '5px' }}>
            Home
          </NavLink>
          <RightOutlined style={{ color: '#0d6efd', marginRight: '5px' }} />
          <NavLink to={`/${user}/repo`} className="text-primary">
            {user}
          </NavLink>
        </div>
        <h1 className="d-flex justify-content-center align-items-center mt-4">{repo} commits</h1>
        <Divider />
        {commitList.map((eachRepoData, index) => {
          return <CommitCard commitData={eachRepoData} onClickCommit={onClickCommit} key={index} />;
        })}
      </div>
    </ContentWrapperContainer>
  );
};

export default CommitsResultConatiner;
