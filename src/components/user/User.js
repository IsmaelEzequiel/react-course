import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const UserAvatar = ({ avatarUrl, avatarImage, name }) => {
  return (
    <div className="avatar">
      <a className="avatar-link" href={avatarUrl}>
        <div className="avatar-thumb" style={{ backgroundImage: `url(${avatarImage})`  }}></div>
        <span className="avatar-name">{ name }</span>
      </a>
    </div>
  );
};

UserAvatar.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  avatarImage: PropTypes.string
}

export default UserAvatar;
