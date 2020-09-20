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
      createModal,
      createForm,

      handleChangeCreateForm,
      handleCreateBook,
      handleToggleCreateModal
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleToggleCreateModal}
      />,
      <FlatButton label="Submit" primary={true} type="submit" form="form-id" />
    ];

    return (
      <Dialog
        title="Create Book"
        actions={actions}
        autoScrollBodyContent={true}
        open={createModal}
        onRequestClose={handleToggleCreateModal}>
        <form
          id="form-id"
          onSubmit={event => {
            event.preventDefault();
            handleToggleCreateModal();
            handleCreateBook(createForm);
          }}>
          <div className="flex">
            <div className="textFieldCon">
              <TextField
                fullWidth={true}
                value={createForm.title}
                floatingLabelText={<span>Title</span>}
                hintText="Title"
                onChange={event => {
                  handleChangeCreateForm({
                    ...createForm,
                    title: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={createForm.author}
                floatingLabelText={<span>Author</span>}
                hintText="Author"
                onChange={event => {
                  handleChangeCreateForm({
                    ...createForm,
                    author: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={createForm.publisher}
                floatingLabelText={<span>Publisher</span>}
                hintText="Publisher"
                onChange={event => {
                  handleChangeCreateForm({
                    ...createForm,
                    publisher: event.target.value
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={createForm.quantity}
                floatingLabelText={<span>Quantity</span>}
                hintText="Quantity"
                onChange={event => {
                  handleChangeCreateForm({
                    ...createForm,
                    quantity: event.target.value
                  });
                }}
              />

              <SelectField
                selectedMenuItemStyle={selectStyle}
                className="left"
                floatingLabelText={<span>Status</span>}
                fullWidth={true}
                value={createForm.status}
                onChange={(event, index, value) => {
                  handleChangeCreateForm({
                    ...createForm,
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
