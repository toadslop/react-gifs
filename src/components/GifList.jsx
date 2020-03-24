import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs, setGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => { return <Gif id={id} key={id} setGif={setGif} />; })}
    </div>
  );
};

export default GifList;
