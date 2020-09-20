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

let passError = '';
let rpassError = '';
let codenameError = '';
let lnameError = '';
let fnameError = '';
let typeError = '';
let emailError = '';
let contactError = '';

let passValid = false;
let rpassValid = false;
let codenameValid = false;
let lnameValid = false;
let fnameValid = false;
let typeValid = false;
let emailValid = false;
let contactValid = false;
let formValid = false;

// eslint-disable-next-line
const emailRegex = /.+\@.+\..+/;

const contactRegex = /(0|639)[0-9]{10}/;

class Edit extends Component {
  componentDidMount() {
    this.props.handleGetGuardians();
  }

  render() {
    const {
      guardians,
      editForm,
      editUser,
      handleEditUser,
      handleChangeEditForm,
      handleCloseEditModal
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleCloseEditModal}
      />,
      <FlatButton label="Submit" primary={true} type="submit" form="form-id" />
    ];

    return (
      <Dialog
        title="Edit User"
        actions={actions}
        autoScrollBodyContent={true}
        open={editUser}
        onRequestClose={handleCloseEditModal}>
        {editUser && (
          <form
            id="form-id"
            onSubmit={event => {
              event.preventDefault();

              // Password Validate
              if (!editForm.password) {
                passError = errorTexts[0];
                passValid = false;
              } else if (editForm.password.length < 8) {
                passError = errorTexts[2];
                passValid = false;
              } else {
                passError = '';
                passValid = true;
              }

              // Repeat Password Validate
              if (!editForm.passwordRep) {
                rpassError = errorTexts[0];
                rpassValid = false;
              } else if (editForm.password !== editForm.passwordRep) {
                rpassError = errorTexts[1];
                rpassValid = false;
              } else {
                rpassError = '';
                rpassValid = true;
              }

              // Codename Validate
              if (!editForm.codeName) {
                codenameError = errorTexts[0];
                codenameValid = false;
              } else {
                codenameError = '';
                codenameValid = true;
              }

              // Last Name Validate
              if (!editForm.lastName) {
                lnameError = errorTexts[0];
                lnameValid = false;
              } else {
                lnameError = '';
                lnameValid = true;
              }

              // First Name Validate
              if (!editForm.lastName) {
                fnameError = errorTexts[0];
                fnameValid = false;
              } else {
                fnameError = '';
                fnameValid = true;
              }

              // Type Validate
              if (!editForm.type) {
                typeError = errorTexts[0];
                typeValid = false;
              } else {
                typeError = '';
                typeValid = true;
              }

              // Email Validate
              if (!editForm.email) {
                emailError = errorTexts[0];
                emailValid = false;
              } else if (!editForm.email.match(emailRegex)) {
                emailError = errorTexts[3];
                emailValid = false;
              } else {
                emailError = '';
                emailValid = true;
              }

              // Contact Number Validate
              if (!editForm.contactNo) {
                contactError = errorTexts[0];
                contactValid = false;
              } else if (!editForm.contactNo.match(contactRegex)) {
                contactError = errorTexts[3];
                contactValid = false;
              } else {
                contactError = '';
                contactValid = true;
              }

              // Check if form valid
              if (
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
                handleCloseEditModal();
                handleEditUser(editForm);
              } else {
                this.forceUpdate();
              }
            }}>
            <div className="flex">
              <div className="textFieldCon">
                <TextField
                  fullWidth={true}
                  value={editUser.studNo}
                  floatingLabelText="Student Number"
                  disabled={true}
                />

                <TextField
                  fullWidth={true}
                  value={editForm.password}
                  floatingLabelText={<span>Password{passError}</span>}
                  hintText="Password"
                  type="password"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      password: event.target.value
                    });
                  }}
                />

                <TextField
                  fullWidth={true}
                  value={editForm.passwordRep}
                  floatingLabelText={<span>Repeat Password{rpassError}</span>}
                  hintText="Repeat Password"
                  type="password"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      passwordRep: event.target.value
                    });
                  }}
                />

                <TextField
                  fullWidth={true}
                  value={editForm.codeName}
                  floatingLabelText={<span>Code Name{codenameError}</span>}
                  hintText="Code Name"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      codeName: event.target.value
                    });
                  }}
                />

                <TextField
                  fullWidth={true}
                  value={editForm.lastName}
                  floatingLabelText={<span>Last Name{lnameError}</span>}
                  hintText="Last Name"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      lastName: event.target.value
                    });
                  }}
                />

                <TextField
                  fullWidth={true}
                  value={editForm.firstName}
                  floatingLabelText={<span>First Name{fnameError}</span>}
                  hintText="First Name"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      firstName: event.target.value
                    });
                  }}
                />

                <SelectField
                  selectedMenuItemStyle={selectStyle}
                  className="left"
                  floatingLabelText={<span>Type{typeError}</span>}
                  fullWidth={true}
                  value={editForm.type}
                  onChange={(event, index, value) => {
                    handleChangeEditForm({
                      ...editForm,
                      type: value
                    });
                  }}>
                  <MenuItem value="NONSCHO" primaryText="NONSCHO" />
                  <MenuItem value="SCHO" primaryText="SCHO" />
                  <MenuItem value="SCHOHEAD" primaryText="SCHOHEAD" />
                </SelectField>

                <TextField
                  fullWidth={true}
                  value={editForm.email}
                  floatingLabelText={<span>Email{emailError}</span>}
                  hintText="Email"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      email: event.target.value
                    });
                  }}
                />

                <TextField
                  fullWidth={true}
                  value={editForm.contactNo}
                  floatingLabelText={<span>Contact Number{contactError}</span>}
                  hintText="Contact Number"
                  onChange={event => {
                    handleChangeEditForm({
                      ...editForm,
                      contactNo: event.target.value
                    });
                  }}
                />

                <SelectField
                  selectedMenuItemStyle={selectStyle}
                  className="left"
                  floatingLabelText={<span>Scho Guardian{typeError}</span>}
                  fullWidth={true}
                  value={editForm.schoGuardian}
                  onChange={(event, index, value) => {
                    handleChangeEditForm({
                      ...editForm,
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
        )}
      </Dialog>
    );
  }
}

export default Edit;
