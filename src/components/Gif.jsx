import React, { Component } from 'react'

class Gif extends Component {
  handleClick = (event) => {
    console.log(event.target.id);
    console.log(this.props)
    this.props.setGif(event.target.id);
  }

  render() {
    const gifId = this.props.id
    const src = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} id={gifId} alt="A gif" />
    )
  }
}

export default Gif;
