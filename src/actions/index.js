const giphy = require('giphy-api')('PhzwWN4ixg1m6c1Hato1rtKwSGuZjwOi');

const search = (query) => {
  giphy.search({
    q: query,
    rating: 'g',
    limit: 10
  }, (error, result) => {
    this.setState({
      gifs: result.data,
    });
  });
};

export function setGifs() {
  // TODO: make an API call!
  const gifs = [
    { id: "a93jwI0wkWTQs" },
    { id: "BBkKEBJkmFbTG" }
  ];
  return {
    type: 'SET_GIFS',
    payload: gifs
  };
}

export function setSelectedGif(selectedGifId) {
  return {
    type: 'SET_SELECTED_GIF',
    payload: selectedGifId
  };
}
