import * as Api from '../../api';
import { handle } from 'redux-pack';

const GET_BOOKS = 'SCHOLIB/GET_BOOKS';
const GET_BOOK = 'SCHOLIB/GET_BOOK';
const CREATE_BOOK = 'SCHOLIB/CREATE_BOOK';
const REMOVE_BOOK = 'SCHOLIB/REMOVE_BOOK';
const EDIT_BOOK = 'SCHOLIB/EDIT_BOOK';
const CHANGE_BOOK = 'SCHOLIB/CHANGE_BOOK';

const OPEN_MODAL = 'SCHOLIB/OPEN_MODAL';
const CLOSE_MODAL = 'SCHOLIB/CLOSE_MODAL';
const CHANGE_SEARCH_BOOK = 'SCHOLIB/CHANGE_SEARCH_BOOK';
const TOGGLE_CREATE_MODAL = 'SCHOLIB/TOGGLE_CREATE_MODAL';

const CHANGE_CREATE_FORM = 'SCHOLIB/CHANGE_CREATE_FORM';
const CHANGE_EDIT_FORM = 'SCHOLIB/CHANGE_EDIT_FORM';

const OPEN_EDIT_MODAL = 'SCHOLIB/OPEN_EDIT_MODAL';
const CLOSE_EDIT_MODAL = 'SCHOLIB/CLOSE_EDIT_MODAL';

export const openEditModal = book => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: book
  };
};

export const closeEditModal = () => {
  return {
    type: CLOSE_EDIT_MODAL
  };
};

export const changeCreateForm = form => {
  return {
    type: CHANGE_CREATE_FORM,
    payload: form
  };
};

export const changeEditForm = form => {
  return {
    type: CHANGE_EDIT_FORM,
    payload: form
  };
};

export const editBook = details => {
  return {
    type: EDIT_BOOK,
    promise: Api.editBook(details)
  };
};

export const openModal = id => {
  return {
    type: OPEN_MODAL,
    promise: Api.getBook(id)
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const getBooks = () => {
  return {
    type: GET_BOOKS,
    promise: Api.getBooks()
  };
};

export const getBook = id => {
  return {
    type: GET_BOOK,
    promise: Api.getBook(id)
  };
};

export const createBook = details => {
  return {
    type: CREATE_BOOK,
    promise: Api.createBook(details)
  };
};

export const removeBook = id => {
  return {
    type: REMOVE_BOOK,
    promise: Api.removeBook(id)
  };
};

export const changeBook = content => {
  return {
    type: CHANGE_BOOK,
    payload: content
  };
};

export const changeSearchBook = book => {
  return {
    type: CHANGE_SEARCH_BOOK,
    payload: book
  };
};

export const toggleCreateModal = () => {
  return {
    type: TOGGLE_CREATE_MODAL
  };
};

const initialForm = {
  title: '',
  author: '',
  publisher: '',
  quantity: '',
  status: ''
};

// Initial State
const initialState = {
  books: [],
  book: null,
  searchBook: '',
  createModal: false,

  editBook: null,
  createForm: { ...initialForm },
  editForm: { ...initialForm }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        editBook: payload,
        editForm: {
          title: payload.title,
          author: payload.author,
          publisher: payload.publisher,
          quantity: payload.quantity,
          status: payload.status,
          id: payload.id
        }
      };

    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        editBook: null
      };

    case CHANGE_CREATE_FORM:
      return {
        ...state,
        createForm: payload
      };

    case CHANGE_EDIT_FORM:
      return {
        ...state,
        editForm: payload
      };

    case OPEN_MODAL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          book: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CLOSE_MODAL:
      return {
        ...state,
        book: null
      };
    case CHANGE_SEARCH_BOOK:
      return {
        ...state,
        searchBook: payload
      };
    case GET_BOOKS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          books: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case GET_BOOK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          book: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CREATE_BOOK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          createForm: { ...initialForm },
          books: [...state.books, payload.data.data]
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case EDIT_BOOK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          editForm: { ...initialForm },
          books: state.books.map(book => {
            if (book.id === payload.data.data.id) return payload.data.data;
            return book;
          })
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case REMOVE_BOOK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          books: state.books.filter(book => book.id !== payload.data.data.id)
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CHANGE_BOOK:
      return {
        ...state,
        searchBook: payload
      };
    case TOGGLE_CREATE_MODAL:
      return {
        ...state,
        createModal: !state.createModal
      };
    default:
      return state;
  }
};

export default reducer;
