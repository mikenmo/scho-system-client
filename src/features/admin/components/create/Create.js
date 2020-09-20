import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';

// error texts
const error = {
  color: 'red'
};

const selectStyle = {
  color: '#0B3C5D'
};

const errorTexts = [
  <span style={error}> is required</span>,
  <span style={error}> must match password</span>,
  <span style={error}> > 7 characters</span>,
  <span style={error}> must be valid</span>
];

let studNoError = '';
let passError = '';
let rpassError = '';
let codenameError = '';
let lnameError = '';
let fnameError = '';
let typeError = '';
let emailError = '';
let contactError = '';

// is Valid
let studNoValid = false;
let passValid = false;
let rpassValid = false;
let codenameValid = false;
let lnameValid = false;
let fnameValid = false;
let typeValid = false;
let emailValid = false;
let contactValid = false;
let formValid = false;

// regex

// eslint-disable-next-line
const emailRegex = /.+\@.+\..+/;

const contactRegex = /(0|639)[0-9]{10}/;

// eslint-disable-next-line
const studNoRegex = /[0-9]{4}\-[0-9]{5}/;

class Create extends Component {
  componentDidMount() {
    this.props.handleGetGuardians();
  }

  render() {
    const {
      guardians,
      createModal,
      registrationForm,
      handleCreateUser,
      handleChangeCreateForm,
      handleCreateModal
    } = this.props;

    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={handleCreateModal} />,
      <FlatButton label="Submit" primary={true} type="submit" form="form-id" />
    ];

    return (
      <Dialog
        title="Create User"
        actions={actions}
        autoScrollBodyContent={true}
        open={createModal}
        onRequestClose={handleCreateModal}>
        <form
          id="form-id"
          onSubmit={event => {
            event.preventDefault();
            // Student Number Validate
            if (!registrationForm.studNo) {
              studNoError = errorTexts[0];
              studNoValid = false;
            } else if (!registrationForm.studNo.match(studNoRegex)) {
              studNoError = errorTexts[3];
              studNoValid = false;
            } else {
              studNoError = '';
              studNoValid = true;
            }

            // Password Validate
            if (!registrationForm.password) {
              passError = errorTexts[0];
              passValid = false;
            } else if (registrationForm.password.length < 8) {
              passError = errorTexts[2];
              passValid = false;
            } else {
              passError = '';
              passValid = true;
            }

            // Repeat Password Validate
            if (!registrationForm.passwordRep) {
              rpassError = errorTexts[0];
              rpassValid = false;
            } else if (
              registrationForm.password !== registrationForm.passwordRep
            ) {
              rpassError = errorTexts[1];
              rpassValid = false;
            } else {
              rpassError = '';
              rpassValid = true;
            }

            // Codename Validate
            if (!registrationForm.codeName) {
              codenameError = errorTexts[0];
              codenameValid = false;
            } else {
              codenameError = '';
              codenameValid = true;
            }

            // Last Name Validate
            if (!registrationForm.lastName) {
              lnameError = errorTexts[0];
              lnameValid = false;
            } else {
              lnameError = '';
              lnameValid = true;
            }

            // First Name Validate
            if (!registrationForm.lastName) {
              fnameError = errorTexts[0];
              fnameValid = false;
            } else {
              fnameError = '';
              fnameValid = true;
            }

            // Type Validate
            if (!registrationForm.type) {
              typeError = errorTexts[0];
              typeValid = false;
            } else {
              typeError = '';
              typeValid = true;
            }

            // Email Validate
            if (!registrationForm.email) {
              emailError = errorTexts[0];
              emailValid = false;
            } else if (!registrationForm.email.match(emailRegex)) {
              emailError = errorTexts[3];
              emailValid = false;
            } else {
              emailError = '';
              emailValid = true;
            }

            // Contact Number Validate
            if (!registrationForm.contactNo) {
              contactError = errorTexts[0];
              contactValid = false;
            } else if (!registrationForm.contactNo.match(contactRegex)) {
              contactError = errorTexts[3];
              contactValid = false;
            } else {
              contactError = '';
              contactValid = true;
            }

            // Check if form valid
            if (
              studNoValid &&
              passValid &&
              rpassValid &&
              codenameValid &&
              lnameValid &&
              fnameValid &&
              typeValid &&
              emailValid &&
              contactValid
            ) {
              formValid = true;
            } else {
              formValid = false;
            }

            // Form Valid
            if (formValid) {
              handleCreateModal();
              handleCreateUser(registrationForm);
            } else {
              this.forceUpdate();
            }
          }}>
          <div className="flex">
            <div className="textFieldCon">
              <TextField
                fullWidth={true}
                value={registrationForm.studNo}
                floatingLabelText={<span>Student Number{studNoError}</span>}
                hintText="20XX-XXXXX"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    studNo: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={registrationForm.password}
                floatingLabelText={<span>Password{passError}</span>}
                hintText="Password"
                type="password"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    password: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={registrationForm.passwordRep}
                floatingLabelText={<span>Repeat Password{rpassError}</span>}
                hintText="Repeat Password"
                type="password"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    passwordRep: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={registrationForm.codeName}
                floatingLabelText={<span>Code Name{codenameError}</span>}
                hintText="Code Name"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    codeName: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={registrationForm.lastName}
                floatingLabelText={<span>Last Name{lnameError}</span>}
                hintText="Last Name"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    lastName: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={registrationForm.firstName}
                floatingLabelText={<span>First Name{fnameError}</span>}
                hintText="First Name"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    firstName: event.target.value
                  });
                }}
              />

              <SelectField
                selectedMenuItemStyle={selectStyle}
                className="left"
                floatingLabelText={<span>Type{typeError}</span>}
                fullWidth={true}
                value={registrationForm.type}
                onChange={(event, index, value) => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    type: value
                  });
                }}>
                <MenuItem value="NONSCHO" primaryText="NONSCHO" />
                <MenuItem value="SCHO" primaryText="SCHO" />
                <MenuItem value="SCHOHEAD" primaryText="SCHOHEAD" />
              </SelectField>

              <TextField
                fullWidth={true}
                value={registrationForm.email}
                floatingLabelText={<span>Email{emailError}</span>}
                hintText="Email"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    email: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={registrationForm.contactNo}
                floatingLabelText={<span>Contact Number{contactError}</span>}
                hintText="Contact Number"
                onChange={event => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    contactNo: event.target.value
                  });
                }}
              />

              <SelectField
                selectedMenuItemStyle={selectStyle}
                className="left"
                floatingLabelText={<span>Scho Guardian{typeError}</span>}
                fullWidth={true}
                value={registrationForm.schoGuardian}
                onChange={(event, index, value) => {
                  handleChangeCreateForm({
                    ...registrationForm,
                    schoGuardian: value
                  });
                }}>
                {guardians.map(guardian => {
                  return (
                    <MenuItem
                      value={guardian.studNo}
                      primaryText={`${guardian.firstName} ${guardian.lastName}`}
                    />
                  );
                })}
              </SelectField>
            </div>
          </div>
        </form>
      </Dialog>
    );
  }
}

export default Create;
