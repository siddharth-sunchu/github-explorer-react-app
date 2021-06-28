import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StarIcon, RepoForkedIcon } from '@primer/octicons-react';
import moment from 'moment';
import { Typography } from 'antd';
import { CardWrapper } from 'components';

import './RepoCard.css';
const { Paragraph, Title } = Typography;

const RepoCard = ({ repoData, onClick }) => {
  const { name, description, stargazers_count, updated_at, forks_count } = repoData;
  return (
    <Link
      to={`${name}/commits`}
      onClick={() => onClick(name)}
      className="d-flex justify-content-center align-items-center"
    >
      <CardWrapper>
        <div>
          <Title className="card-title text-primary" ellipsis={true}>{name}</Title>
          <Paragraph className="card-subtitle text-muted" ellipsis={true} >{description}</Paragraph>
          <div className="d-flex">
            <span style={{ marginRight: '3px' }}>
              <RepoForkedIcon />
            </span>

            <Paragraph style={{ marginRight: '15px' }} className="text-muted">{forks_count}</Paragraph>
            <span style={{ marginRight: '3px' }}>
              <StarIcon />
            </span>
            <Paragraph style={{ marginRight: '15px' }} className="text-muted">{stargazers_count}</Paragraph>
            <Paragraph style={{ marginLeft: '15px' }} className="text-muted">Updated {moment(updated_at).fromNow()}</Paragraph>
          </div>
        </div>
      </CardWrapper>
    </Link>
  );
};

RepoCard.propTypes = {
  repoData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default RepoCard;
