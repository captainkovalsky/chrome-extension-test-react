import React, { Component } from 'react';
export default class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);
    }

    login() {
        const { username, password } = this.refs;
        this.props.login(username.value, password.value);
    }

    render() {
        return (
            <form>
                <input type="text" name="username" ref="username" /><br />
                <input type="password" name="password" ref="password" /> <br />
                <button type="button" onClick={() => this.login() }>Login</button>
            </form>
        );
    }
}
