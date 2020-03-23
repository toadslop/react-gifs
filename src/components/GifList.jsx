import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {
  render() {
    return(
      <div className="gif-list">
        {this.props.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} setGif={this.props.setGif} />;
        })}
      </div>
    )
  }
}

export default GifList;
