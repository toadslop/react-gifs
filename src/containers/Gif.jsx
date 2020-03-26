import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedGif } from '../actions';

class Gif extends Component {
  // componentDidMount() {
  //   this.props.setSelectedGif();
  // }

  // shouldComponentUpdate(nextProps) {
  //   const { id } = this.props;
  //   return nextProps.id !== id;
  // }

  handleClick = (event) => {
    // const { setGif } = this.props;
    this.props.setSelectedGif(event.target.id);
  }

  render() {
    console.log(this.props);
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (id ? <img src={src} className="gif" onClick={this.handleClick} id={id} alt="A gif" /> : <img />);
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

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
