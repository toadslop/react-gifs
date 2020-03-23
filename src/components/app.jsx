/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')('PhzwWN4ixg1m6c1Hato1rtKwSGuZjwOi');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "a93jwI0wkWTQs"
    };

    this.search("homer thinking");
  }

  search = (query) => {
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data,
      });
    });
  }

  setGif = (clickedGifId) => {
    this.setState({
      selectedGifId: clickedGifId
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} setGif={this.setGif} />
        </div>
      </div>
    );
  }
}

export default App;
