import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import Reducer from './reducers/indexReducers';
import middleWare from './middleWares/';
import './index.css';

const store = createStore(Reducer, middleWare);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
