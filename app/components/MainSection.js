import React, { Component, PropTypes } from 'react';
import style from './MainSection.css';
import LoginForm from './LoginForm';

export default class MainSection extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    isLogged: PropTypes.bool,
    errorMessage: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section className={style.main}>
        {this.renderLoginForm(this.props)}
        {this.renderError(this.props)}
        {this.renderSuccess(this.props)}
      </section>
    );
  }

  renderLoginForm({isLogged, actions}) {
    if (!isLogged) {
      return <LoginForm login={actions.login}  />;
    }
    return false;
  }

   renderError({error, isLogged}) {
    if (error !== '' && !isLogged) {
      return <div>{error}</div>;
    }

    return false;
  }

  renderSuccess({isLogged}) {
    if (isLogged) {
      return <div>Logged !</div>;
    }

    return false;
  }
}
