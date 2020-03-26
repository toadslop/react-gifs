import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGifs } from '../actions';
import Gif from './Gif';

class GifList extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <div className="gif-list">
        {gifs.map(({ id }) => { return <Gif id={id} key={id} />; })}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
