import React from 'react';
import { SearchBarContainer, SearchResultContainer } from 'containers';
import { Divider } from 'antd';

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <SearchBarContainer />
      </div>
      <Divider />
      <SearchResultContainer />
    </div>
  );
};

export default Home;
