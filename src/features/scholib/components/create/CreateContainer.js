import { connect } from 'react-redux';
import Create from './Create';
import { changeCreateForm, createBook, toggleCreateModal } from '../../duck';

const mapStateToProps = state => {
  const { createModal, createForm } = state.scholib;
  return {
    createModal,
    createForm
  };
};

const mapDispatchToProps = dispatch => ({
  handleChangeCreateForm: form => {
    dispatch(changeCreateForm(form));
  },
  handleCreateBook: details => {
    dispatch(createBook(details));
  },
  handleToggleCreateModal: () => {
    dispatch(toggleCreateModal());
  }
});

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create);
export default CreateContainer;
