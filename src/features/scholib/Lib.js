// Add validation to forms
// Limit entries and searching should be done also in backend

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { List, ListItem } from 'material-ui/List';
import { CardTitle } from 'material-ui/Card';

import { TextField, Divider } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import EditIcon from 'material-ui/svg-icons/content/create';
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep';
import IconButton from 'material-ui/IconButton';

import BookModal from './components/book/BookModalContainer';
import CreateModal from './components/create/CreateContainer.js';
import EditModal from './components/edit/EditContainer.js';

import Banner from '../../assets/schoLibrary.png';

const titleSize = {
  fontSize: 22
};

const subtitleSize = {
  fontSize: 20
};

class Lib extends Component {
  componentDidMount() {
    this.props.handleGetBooks();
  }
  render() {
    const {
      user,
      books,
      searchBook,

      handleRemoveBook,
      handleOpenModal,
      handleChangeSearchBook,
      handleToggleCreateModal,
      handleOpenEditModal
    } = this.props;

    if (user.type === 'SCHO' || user.type === 'SCHOHEAD') {
      return (
        <DocumentTitle title="Scho Library">
          <div className="center1">
            <img src={Banner} alt="logo" />
            <br />
            <RaisedButton
              onClick={handleToggleCreateModal}
              label="Add Book"
              icon={<AddIcon />}
            />
            <TextField
              hintText="Search"
              fullWidth={true}
              onChange={event => handleChangeSearchBook(event.target.value)}
            />

            <List className="justify">
              <br />
              {books
                .filter(book => {
                  if (
                    book.title.toLowerCase().includes(searchBook.toLowerCase())
                  )
                    return true;
                  return false;
                })
                .map(book => {
                  return (
                    <div>
                      <ListItem
                        onClick={() => handleOpenModal(book.id)}
                        className="booklist">
                        <CardTitle
                          title={book.title}
                          subtitle={book.author}
                          titleStyle={titleSize}
                          subtitleStyle={subtitleSize}
                        />
                      </ListItem>
                      <div className="buttons">
                        <IconButton onClick={() => handleOpenEditModal(book)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveBook(book.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                      <Divider />
                    </div>
                  );
                })}
            </List>
            <BookModal />
            <CreateModal />
            <EditModal />
          </div>
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title="Scho Library">
          <div className="center1">
            <img src={Banner} alt="logo" />
            <TextField
              hintText="Search"
              fullWidth={true}
              onChange={event => handleChangeSearchBook(event.target.value)}
            />
            <List className="justify">
              {books
                .filter(book => {
                  if (
                    book.title.toLowerCase().includes(searchBook.toLowerCase())
                  )
                    return true;
                  return false;
                })
                .map(book => {
                  return (
                    <div>
                      <ListItem onClick={() => handleOpenModal(book.id)}>
                        <CardTitle
                          title={book.title}
                          subtitle={book.author}
                          titleStyle={titleSize}
                          subtitleStyle={subtitleSize}
                        />
                      </ListItem>
                      <Divider />
                    </div>
                  );
                })}
            </List>
            <BookModal />
          </div>
        </DocumentTitle>
      );
    }
  }
}

export default Lib;
