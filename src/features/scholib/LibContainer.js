import { connect } from 'react-redux';
import Lib from './Lib';

import {
  getBook,
  getBooks,
  createBook,
  removeBook,
  changeBook,
  openModal,
  closeModal,
  changeSearchBook,
  toggleCreateModal,
  changeCreateForm,
  changeEditForm,
  openEditModal
} from './duck';

const mapStateToProps = state => {
  const { user } = state.auth;
  const {
    createForm,
    editForm,
    books,
    book,
    createModal,
    searchBook
  } = state.scholib;
  return {
    user,
    books,
    book,
    createModal,
    searchBook,
    createForm,
    editForm
  };
};

const mapDispatchToProps = dispatch => ({
  handleGetBook: id => {
    dispatch(getBook(id));
  },
  handleGetBooks: () => {
    dispatch(getBooks());
  },
  handleCreateBook: details => {
    dispatch(createBook(details));
  },
  handleRemoveBook: id => {
    dispatch(removeBook(id));
  },
  handleChangeBook: content => {
    dispatch(changeBook(content));
  },
  handleCloseModal: () => {
    dispatch(closeModal());
  },
  handleOpenModal: id => {
    dispatch(openModal(id));
  },
  handleChangeSearchBook: book => {
    dispatch(changeSearchBook(book));
  },
  handleToggleCreateModal: () => {
    dispatch(toggleCreateModal());
  },
  handleChangeCreateForm: form => {
    dispatch(changeCreateForm(form));
  },
  handleChangeEditForm: form => {
    dispatch(changeEditForm(form));
  },
  handleOpenEditModal: id => {
    dispatch(openEditModal(id));
  }
});

const LibContainer = connect(mapStateToProps, mapDispatchToProps)(Lib);

export default LibContainer;
