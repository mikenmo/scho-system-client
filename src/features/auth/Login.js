// Map correct login information

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Logo from '../../assets/schosys-logo-blue.png';

// error texts
const error = {
  color: 'red'
};

const errorTexts = [
  <span style={error}> is required</span>,
  <span style={error}> > 8 characters</span>,
  <span style={error}> must be valid</span>
];

var userError = '';
var passError = '';

// is valid
var userValid = false;
var passValid = false;
var loginValid = false;

// regex

// eslint-disable-next-line
const emailRegex = /.+\@.+\..+/;

// eslint-disable-next-line
const studNoRegex = /[0-9]{4}\-[0-9]{5}/;

class Login extends Component {
  render() {
    const {
      studNo,
      password,
      hasTriedLoggingIn,
      handleChangeStudNo,
      handleChangePassword,
      handleLogin
    } = this.props;

    return (
      <DocumentTitle title="Login">
        <div className="authLogo">
          <img src={Logo} className="logo" alt="logo" />
          <div className="flex auth">
            <Card className="containerAuth">
              <CardTitle title="Welcome to Scho System" />
              <CardText>
                Scho System is used to help the Scholastics Department track the
                organization's academic performance a lot easier. It keeps all
                records in sync and makes sure that the members are getting
                important announcements.
              </CardText>
              <CardText>
                Made by KyahSum, members are as follows: Jasper Arquilita,
                Carlos Canonizado, Kobe De Luna, Keith Manaloto, Kenneth Mojar
              </CardText>
            </Card>

            <Card className="containerAuth">
              <CardTitle title="Login" />

              <br />

              <form
                onSubmit={e => {
                  e.preventDefault();
                  // User Validate
                  if (!studNo) {
                    userError = errorTexts[0];
                    userValid = false;
                  } else if (
                    !studNo.match(studNoRegex) &&
                    !studNo.match(emailRegex) &&
                    studNo !== 'admin'
                  ) {
                    userError = errorTexts[2];
                    userValid = false;
                  } else {
                    userError = '';
                    userValid = true;
                  }

                  // Password Validate
                  if (!password) {
                    passError = errorTexts[0];
                    passValid = false;
                  } else if (password.length < 3) {
                    passError = errorTexts[1];
                    passValid = false;
                  } else {
                    passError = '';
                    passValid = true;
                  }

                  // Check if form valid
                  if (userValid && passValid) {
                    loginValid = true;
                  } else {
                    loginValid = false;
                  }

                  if (loginValid) {
                    handleLogin({ studNo, password });
                  } else {
                    this.forceUpdate();
                  }
                }}>
                <div className="textFieldCon">
                  <TextField
                    fullWidth={true}
                    value={studNo}
                    floatingLabelText={
                      <span>Student Number / Email{userError}</span>
                    }
                    onChange={event => {
                      handleChangeStudNo(event.target.value);
                    }}
                  />

                  <TextField
                    fullWidth={true}
                    value={password}
                    floatingLabelText={<span>Password{passError}</span>}
                    type="password"
                    onChange={event => {
                      handleChangePassword(event.target.value);
                    }}
                  />
                </div>

                <br />

                <div className="center">
                  <RaisedButton label="SUBMIT" primary type="submit" />
                </div>
                {hasTriedLoggingIn && (
                  <CardText>Incorrect login credentials</CardText>
                )}
              </form>
            </Card>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Login;
