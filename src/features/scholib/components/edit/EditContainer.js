import { connect } from 'react-redux';
import Edit from './Edit';
import {
  changeEditForm,
  editBook,
  openEditModal,
  closeEditModal
} from '../../duck';

const mapStateToProps = state => {
  const { editForm, editBook } = state.scholib;
  return {
    editForm,
    editBook
  };
};

const mapDispatchToProps = dispatch => ({
  handleChangeEditForm: form => {
    dispatch(changeEditForm(form));
  },
  handleEditBook: details => {
    dispatch(editBook(details));
  },
  handleOpenEditModal: id => {
    dispatch(openEditModal(id));
  },
  handleCloseEditModal: () => {
    dispatch(closeEditModal());
  }
});

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);
export default EditContainer;
