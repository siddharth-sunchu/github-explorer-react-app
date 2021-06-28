import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} className="d-flex justify-content-center align-items-center mt-5" />
  );
};

Loader.defaultProps = {
  isLoading: false
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Loader;
