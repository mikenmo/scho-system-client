import { connect } from 'react-redux';
import Admin from './Admin';
import {
  toggleCreateModal,
  toggleCreateSnackbar,
  getUsers,
  removeUser,
  openEditModal,
  closeEditModal
} from './duck';

const mapStateToProps = state => {
  const { users, createModal, createSnackbar } = state.admin;
  return {
    users,
    createModal,
    createSnackbar
  };
};

const mapDispatchToProps = dispatch => ({
  handleCreateModal: () => {
    dispatch(toggleCreateModal());
  },
  handleCreateSnackbar: () => {
    dispatch(toggleCreateSnackbar());
  },
  handleGetUsers: () => {
    dispatch(getUsers());
  },
  handleRemoveUser: id => {
    dispatch(removeUser(id));
  },
  handleOpenEditModal: user => {
    dispatch(openEditModal(user));
  },
  handleCloseEditModal: () => {
    dispatch(closeEditModal());
  }
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default AdminContainer;
