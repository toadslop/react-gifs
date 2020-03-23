import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';

class App extends Component {
  render() {
    return ( 
      <div>
        <div className = "left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className = "right-scene" ></div>
      </div>
    )
  }
}

export default App;
