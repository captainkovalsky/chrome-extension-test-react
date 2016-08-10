import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

import * as OvpnActions from '../actions/ovpn-actions';
import style from './App.css';

@connect(
  state => ({
    isLogged: state.main.isLogged,
    errorMessage: state.main.errorMessage
  }),
  dispatch => ({
    actions: bindActionCreators(OvpnActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,

  };

  render() {
    const { actions, errorMessage, isLogged } = this.props;
    return (
      <div className={style.normal}>
        <Header />
        <MainSection actions={actions} error={errorMessage} isLogged={isLogged} />
      </div>
    );
  }
}
