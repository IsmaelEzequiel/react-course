import React, { Component } from 'react';

import avatarImage from '../PICON.png';
import './App.css';

import UserAvatar from './user/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAvatar
          avatarUrl={'javascript:;'}
          avatarImage={avatarImage}
          name={'Ismael'}/>
      </div>
    );
  }
}

export default App;
