import { connect } from 'react-redux';
import Edit from './Edit';
import {
  getGuardians,
  editUser,
  changeEditForm,
  closeEditModal
} from '../../duck';

const mapStateToProps = state => {
  const { guardians, editForm, editUser } = state.admin;
  return {
    guardians,
    editForm,
    editUser
  };
};
const mapDispatchToProps = dispatch => ({
  handleEditUser: details => {
    dispatch(editUser(details));
  },
  handleChangeEditForm: data => {
    dispatch(changeEditForm(data));
  },
  handleCloseEditModal: () => {
    dispatch(closeEditModal());
  },
  handleGetGuardians: () => {
    dispatch(getGuardians());
  }
});

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);
export default EditContainer;
