import { connect } from 'react-redux';
import BookModal from './BookModal';

import { closeModal } from '../../duck';

const mapStateToProps = state => {
  const { book } = state.scholib;
  return {
    book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCloseModal: () => {
      dispatch(closeModal());
    }
  };
};

const BookModalContainer = connect(mapStateToProps, mapDispatchToProps)(
  BookModal
);

export default BookModalContainer;
