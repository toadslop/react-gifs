import React, { Component } from 'react'

class Gif extends Component {
  handleClick = (event) => {
    const { setGif } = this.props;
    console.log(event.target.id);
    console.log(this.props);
    setGif(event.target.id);
  }

  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (id ? <img src={src} className="gif" onClick={this.handleClick} id={id} alt="A gif" /> : <img />)
  }
}

export default Gif;
