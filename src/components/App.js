import React, { Component } from 'react';
import './App.css';

import { Search } from './header/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search searchClass={'Search'}/>
      </div>
    );
  }
}

export default App;
