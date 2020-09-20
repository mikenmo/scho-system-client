import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';

const selectStyle = {
  color: '#0B3C5D'
};

class Create extends Component {
  render() {
    const {
      editForm,
      editBook,

      handleChangeEditForm,
      handleCloseEditModal,
      handleEditBook
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
        title="Edit Book"
        actions={actions}
        autoScrollBodyContent={true}
        open={editBook}
        onRequestClose={handleCloseEditModal}>
        <form
          id="form-id"
          onSubmit={event => {
            event.preventDefault();
            handleCloseEditModal();
            handleEditBook(editForm);
          }}>
          <div className="flex">
            <div className="textFieldCon">
              <TextField
                fullWidth={true}
                value={editForm.title}
                floatingLabelText={<span>Title</span>}
                hintText="Title"
                onChange={event => {
                  handleChangeEditForm({
                    ...editForm,
                    title: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={editForm.author}
                floatingLabelText={<span>Author</span>}
                hintText="Author"
                onChange={event => {
                  handleChangeEditForm({
                    ...editForm,
                    author: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={editForm.publisher}
                floatingLabelText={<span>Publisher</span>}
                hintText="Publisher"
                onChange={event => {
                  handleChangeEditForm({
                    ...editForm,
                    publisher: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={editForm.quantity}
                floatingLabelText={<span>Quantity</span>}
                hintText="Quantity"
                onChange={event => {
                  handleChangeEditForm({
                    ...editForm,
                    quantity: event.target.value
                  });
                }}
              />

              <SelectField
                selectedMenuItemStyle={selectStyle}
                className="left"
                floatingLabelText={<span>Status</span>}
                fullWidth={true}
                value={editForm.status}
                onChange={(event, index, value) => {
                  handleChangeEditForm({
                    ...editForm,
                    status: value
                  });
                }}>
                <MenuItem value="Available" primaryText="Available" />
                <MenuItem value="Not Available" primaryText="Not Available" />
              </SelectField>
            </div>
          </div>
        </form>
      </Dialog>
    );
  }
}

export default Create;
