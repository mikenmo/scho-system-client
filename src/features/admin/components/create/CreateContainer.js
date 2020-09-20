import { connect } from 'react-redux';
import Create from './Create';
import {
  getGuardians,
  createUser,
  changeCreateForm,
  toggleCreateModal
} from '../../duck';

const mapStateToProps = state => {
  const { guardians, registrationForm, createModal } = state.admin;
  return {
    registrationForm,
    createModal,
    guardians
  };
};
const mapDispatchToProps = dispatch => ({
  handleCreateUser: details => {
    dispatch(createUser(details));
  },
  handleChangeCreateForm: data => {
    dispatch(changeCreateForm(data));
  },
  handleCreateModal: () => {
    dispatch(toggleCreateModal());
  },
  handleGetGuardians: () => {
    dispatch(getGuardians());
  }
});

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create);
export default CreateContainer;
