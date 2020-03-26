const gifsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_GIFS':
      return action.payload;
    default:
      return state;
  }
};

export default gifsReducer;
