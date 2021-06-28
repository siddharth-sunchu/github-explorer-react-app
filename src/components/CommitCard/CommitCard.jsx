import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Typography } from 'antd';
import { CardWrapper } from 'components';

const { Paragraph } = Typography;

const CommitCard = ({ commitData, onClickCommit }) => {
  const { commit, author, html_url } = commitData;
  const { message } = commit;
  const { date } = commit.author;
  const { login, avatar_url } = author;
  return (
    <div
      onClick={() => onClickCommit(html_url)}
      className="d-flex justify-content-center align-items-center"
    >
      <CardWrapper >
        <div>
          <Paragraph
            className="card-title text-primary"
            ellipsis={{
              rows: 2,
              expandable: true,
              symbol: 'more',
              onExpand: (event) => {
                event.stopPropagation();
              }
            }}
          >
            {message}
          </Paragraph>
          <div className="d-flex align-items-center">
            <img src={avatar_url} alt="" style={{ width: '20px', marginRight: '10px' }} />
            <p className="card-subtitle" style={{  marginRight: '10px' }}><strong>{login}</strong></p>
            <p className="card-subtitle">Committed {moment(date).fromNow()}</p>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

CommitCard.propTypes = {
  commitData: PropTypes.object.isRequired,
  onClickCommit: PropTypes.func.isRequired
};

export default CommitCard;
