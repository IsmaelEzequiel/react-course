import React from 'react';
import PropTypes from 'prop-types';

import './ProfileButton.css';

const ProfileButton = ({ btnName, btnUrl }) => {
  return (
    <div className="button">
      <a href={ btnUrl }>{ btnName }</a>
    </div>
  )
};

ProfileButton.propTypes = {
  btnUrl: PropTypes.string,
  btnName: PropTypes.string
};

export default ProfileButton;
