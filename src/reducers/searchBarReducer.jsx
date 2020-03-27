const searchBarReducer = (state, action) => {
  if (state === undefined) {
    return "";
  }

  switch (action.type) {
    case 'BLUR_SEARCH_BAR':
      return action.payload;
    case 'FOCUS_SEARCH_BAR':
      return action.payload;
    default:
      return state;
  }
};

export default searchBarReducer;
