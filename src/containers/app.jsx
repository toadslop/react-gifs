/* eslint-disable react/jsx-no-comment-textnodes */
// external imports
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedGif } from '../actions';


// import components and containers
import SearchBar from '../components/SearchBar';
import Gif from './Gif';
import GifList from './GifList';

// app constants
const giphy = require('giphy-api')('PhzwWN4ixg1m6c1Hato1rtKwSGuZjwOi');

class App extends Component {
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

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.props.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList setGif={this.setGif} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedGif: setSelectedGif },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedGif: state.selectedGif
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
