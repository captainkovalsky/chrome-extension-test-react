import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

  const createStore = require('../../app/store/configureStore');
  ReactDOM.render(
    <Root store={ createStore({}) } />,
    document.querySelector('#root')
  );
