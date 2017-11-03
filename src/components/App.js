import React, { Component } from 'react';

import avatarImage from '../PICON.png';
import './App.css';

import UserAvatar from './user/User';
import Button from './common/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="profile-container">
          <div className="profile-list">
            <span className="profile-title">Quem está assistindo?</span>
            <ul className="profile-users">
              <li>
                <UserAvatar
                avatarUrl={'javascript:;'}
                avatarImage={avatarImage}
                name={'Ismael'}/>
              </li>
              <li>
                <UserAvatar
                avatarUrl={'javascript:;'}
                avatarImage={avatarImage}
                name={'Ismael'}/>
              </li>
              <li>
                <UserAvatar
                avatarUrl={'javascript:;'}
                avatarImage={avatarImage}
                name={'Ismael'}/>
              </li>
              <li>
                <UserAvatar
                avatarUrl={'javascript:;'}
                avatarImage={avatarImage}
                name={'Ismael'}/>
              </li>
              <li>
                <UserAvatar
                avatarUrl={'javascript:;'}
                avatarImage={avatarImage}
                name={'Ismael'}/>
              </li>
            </ul>

            <Button
                btnName={'gerenciar perfis'}
                btnUrl={'javascript:;'}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
