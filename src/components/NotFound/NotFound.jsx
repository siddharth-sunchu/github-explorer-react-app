import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
const { Paragraph, Title } = Typography;

const NotFound = ({ content, resetStore, children }) => {
  if (content) {
    return <>{children}</>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div>
        <Title>Not Found</Title>
        <Divider />
        <Paragraph>The page you are looking for does not exist...</Paragraph>
        <NavLink exact to="/" onClick={resetStore}>
          Go Back to Home Page
        </NavLink>
      </div>
    </div>
  );
};

NotFound.defaultProps = {
  content: true
};

NotFound.propTypes = {
  content: PropTypes.bool,
  resetStore: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default NotFound;
