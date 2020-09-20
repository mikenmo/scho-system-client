import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { Card, CardTitle } from 'material-ui/Card';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/content/create';
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep';

import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import CreateUserModal from './components/create/CreateContainer';
import EditUserModal from './components/edit/EditContainer';

const buttonStyle = {
  margin: '10px'
};

class Admin extends Component {
  componentDidMount() {
    this.props.handleGetUsers();
  }

  render() {
    const {
      users,
      createSnackbar,
      handleCreateModal,
      handleCreateSnackbar,
      handleOpenEditModal,
      handleRemoveUser
    } = this.props;

    return (
      <DocumentTitle title="Admin Panel">
        <div className="flex">
          <Card className="containerAdmin">
            <CardTitle title="Users" />
            <Table
              selectable={false}
              wrapperStyle={{ overflow: 'visible' }}
              bodyStyle={{ overflow: 'visible' }}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>Student Number</TableHeaderColumn>
                  <TableHeaderColumn>Last Name</TableHeaderColumn>
                  <TableHeaderColumn>First Name</TableHeaderColumn>
                  <TableHeaderColumn>Code Name</TableHeaderColumn>
                  <TableHeaderColumn>User Type</TableHeaderColumn>
                  <TableHeaderColumn width={100}> </TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {users.map(user => {
                  return (
                    <TableRow key={user.studNo}>
                      <TableRowColumn>{user.studNo}</TableRowColumn>
                      <TableRowColumn>{user.lastName}</TableRowColumn>
                      <TableRowColumn>{user.firstName}</TableRowColumn>
                      <TableRowColumn>{user.codeName}</TableRowColumn>
                      <TableRowColumn>{user.type}</TableRowColumn>
                      <TableRowColumn
                        style={{ overflow: 'visible' }}
                        width={100}>
                        <IconButton
                          tooltip={`Edit ${user.codeName}?`}
                          tooltipPosition="top-center"
                          onClick={() => handleOpenEditModal(user)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          tooltip={`Remove ${user.codeName}?`}
                          tooltipPosition="top-center"
                          onClick={() => handleRemoveUser(user.studNo)}>
                          <DeleteIcon />
                        </IconButton>
                        <Snackbar
                          open={createSnackbar}
                          message="User has been deleted!"
                          autoHideDuration={2000}
                          onRequestClose={handleCreateSnackbar}
                        />
                      </TableRowColumn>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Divider />
            <FloatingActionButton
              style={buttonStyle}
              onClick={handleCreateModal}>
              <ContentAdd />
            </FloatingActionButton>
            <CreateUserModal />
            <EditUserModal />
          </Card>
        </div>
      </DocumentTitle>
    );
  }
}

export default Admin;
