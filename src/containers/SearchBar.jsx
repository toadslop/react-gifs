import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGifs } from '../actions';

const giphy = require('giphy-api')('PhzwWN4ixg1m6c1Hato1rtKwSGuZjwOi');

class SearchBar extends Component {
  focusedClasses = "form-control form-search focused"

  classes = "form-control form-search";

  shouldComponentUpdate() {
    return false;
  }

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
    this.classes = this.focusedClasses;
  }

  handleBlur = () => {
    this.classes = this.blurredClasses;
  }

  render() {
    return (
      <input type="text" className={this.classes} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGifs: setGifs },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
