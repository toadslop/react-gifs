import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGifs, focusSearchBar, blurSearchBar } from '../actions';

const giphy = require('giphy-api')('PhzwWN4ixg1m6c1Hato1rtKwSGuZjwOi');

class SearchBar extends Component {
  classes = "form-control form-search";

  focused = " focused"

  search = (query) => {
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      const gifIds = result.data.map((gifData) => { return { id: gifData.id }; });
      this.props.setGifs(gifIds);
    });
  }

  handleChange = (event) => {
    this.search(event.target.value);
  }

  handleFocus = () => {
    this.props.focusSearchBar(true);
  }

  handleBlur = () => {
    this.props.blurSearchBar(false);
  }

  render() {
    return (
      <input
        type="text"
        className={this.props.isSearchBarFocused ? this.classes + this.focused : this.classes}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGifs, focusSearchBar, blurSearchBar },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    isSearchBarFocused: state.isSearchBarFocused
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
