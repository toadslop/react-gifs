// external imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal imports
import gifsReducer from './reducers/gifsReducer';
import selectedGifReducer from './reducers/selectedGifReducer';
import App from './containers/app';
import '../assets/stylesheets/application.scss';

// constants
const root = document.getElementById('root');
const reducers = combineReducers({
  gifs: gifsReducer,
  selectedGif: selectedGifReducer
});

if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    root
  );
}
