export function setGifs(gifs) {
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

export function focusSearchBar(classList) {
  return {
    type: 'FOCUS_SEARCH_BAR',
    payload: classList
  };
}

export function blurSearchBar(classList) {
  return {
    type: 'BLUR_SEARCH_BAR',
    payload: classList
  };
}
