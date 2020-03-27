/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-no-comment-textnodes */
// external imports
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedGif } from '../actions';


// import components and containers
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

// app constants
const giphy = require('giphy-api')('PhzwWN4ixg1m6c1Hato1rtKwSGuZjwOi');

class App extends Component {
  render() {
    const { selectedGif } = this.props;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            { selectedGif ? <Gif id={selectedGif} /> : <h3>Search for a gifs then click one to display it here!</h3> }
          </div>
        </div>
        <div className="right-scene">
          <GifList />
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
    selectedGif: state.selectedGif,
    gifs: state.gifs
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
