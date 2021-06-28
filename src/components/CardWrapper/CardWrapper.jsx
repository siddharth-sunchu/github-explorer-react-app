import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './CardWrapper.css';

const CardWrapper = ({ children }) => {
  return (
    <Card hoverable className="card-container">
      {children}
    </Card>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default CardWrapper;
