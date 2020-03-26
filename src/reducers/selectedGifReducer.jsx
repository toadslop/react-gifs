const selectedGifReducer = (state, action) => {
  console.log(action);
  if (state === undefined) {
    return "";
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_SELECTED_GIF':
      return action.payload;
    default:
      return state;
  }
};

export default selectedGifReducer;
