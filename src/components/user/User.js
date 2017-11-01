import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const UserAvatar = ({ avatarUrl, avatarImage, name }) => {
  return (
    <div className="avatar">
      <a className="avatar_link" href={avatarUrl}>
        <div className="avatar_thumb" style={{ backgroundImage: `url(${avatarImage})`  }}></div>
        <span className="avatar_name">{ name }</span>
      </a>
    </div>
  );
};

UserAvatar.propTypes = {
  name: PropTypes.string
}

export default UserAvatar;
