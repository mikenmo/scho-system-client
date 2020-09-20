import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none'
};
class BookModal extends Component {
  render() {
    const { book, handleCloseModal } = this.props;

    return (
      book && (
        <Dialog
          title={`Title: ${book.title}`}
          actions={
            <FlatButton
              label="Close"
              primary={true}
              onClick={handleCloseModal}
            />
          }
          contentStyle={customContentStyle}
          open={book}
          onRequestClose={handleCloseModal}>
          {
            <div>
              <p>Author: {book.author}</p>
              <p>Publisher: {book.publisher}</p>
              <p>Quantity: {book.quantity}</p>
              <p>Status: {book.status}</p>
            </div>
          }
        </Dialog>
      )
    );
  }
}

export default BookModal;
