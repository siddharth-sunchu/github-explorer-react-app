import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LocationIcon } from '@primer/octicons-react';
import { Typography } from 'antd';
import { CardWrapper } from 'components';

import './UserCard.css';
const { Paragraph, Title } = Typography;

const UserCard = ({ data, onClick }) => {
  const { avatar_url, bio, location, login } = data;

  return (
    <Link
      to={`${login}/repo`}
      onClick={() => onClick(login)}
      className="d-flex justify-content-center align-items-center"
    >
      <CardWrapper>
        <div className="d-flex p-2">
          <img src={avatar_url} alt="" className="image-user-card" />
          <div>
            <Title className="card-title text-primary title-container" ellipsis={true}>{login}</Title>
            {bio ? (
              <Paragraph className="card-subtitle mb-2 text-muted" ellipsis={true}>{bio}</Paragraph>
            ) : (
              <Paragraph className="card-subtitle mb-2 text-muted">Bio not found</Paragraph>
            )}

            {location ? (
              <Paragraph className="card-subtitle mb-2 text-muted">
                <span style={{ marginRight: '5px' }}>
                  <LocationIcon size={16} />
                </span>
                {location}
              </Paragraph>
            ) : (
              <Paragraph className="card-subtitle mb-2 text-muted">
                <span style={{ marginRight: '5px' }}>
                  <LocationIcon size={16} />
                </span>
                Location not found
              </Paragraph>
            )}
            {location && <p>{location}</p>}
          </div>
        </div>
      </CardWrapper>
    </Link>
  );
  // return (
  //   <Link to={`${login}/repo`} onClick={() => onClick(login)}>

  //     <div className="card mb-3 user-card-container" style={{ width: '28rem' }}>
  //       <div className="card-body">
  //         <div className="d-flex p-2">
  //           <img src={avatar_url} alt="" style={{ width: '100px', marginRight: '25px' }} />
  //           <div>
  //             <h2 className="card-title text-primary">{login}</h2>
  //             {bio ? (
  //               <h6 className="card-subtitle mb-2 text-muted">{bio}</h6>
  //             ) : (
  //               <h6 className="card-subtitle mb-2 text-muted">Bio not found</h6>
  //             )}

  //               {location ? (
  //                 <h6 className="card-subtitle mb-2 text-muted"><LocationIcon size={16} />{location}</h6>
  //               ) : (
  //                 <h6 className="card-subtitle mb-2 text-muted"><LocationIcon size={16} />Location not found</h6>
  //               )}
  //               {location && <p>{location}</p>}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Link>
  // );
};

export default UserCard;

UserCard.defaultProps = {
  searchResult: {}
};

UserCard.propTypes = {
  searchResult: PropTypes.object.isRequired
};
