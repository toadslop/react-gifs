export function setGifs(gifs) {
  return {
    type: 'SET_GIFS',
    payload: (gifs === undefined ? [{ id: "a93jwI0wkWTQs" }, { id: "BBkKEBJkmFbTG" }] : gifs)
  };
}

export function setSelectedGif(selectedGifId) {
  return {
    type: 'SET_SELECTED_GIF',
    payload: selectedGifId
  };
}
