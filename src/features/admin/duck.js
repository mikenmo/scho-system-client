import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action Types
const CHANGE_CREATE_FORM = 'ADMIN/CHANGE_CREATE_FORM';
const TOGGLE_CREATE_MODAL = 'ADMIN/TOGGLE_CREATE_MODAL';
const TOGGLE_CREATE_SNACKBAR = 'ADMIN/TOGGLE_CREATE_SNACKBAR';

const CHANGE_EDIT_FORM = 'ADMIN/CHANGE_EDIT_FORM';
const OPEN_EDIT_MODAL = 'ADMIN/OPEN_EDIT_MODAL';
const CLOSE_EDIT_MODAL = 'ADMIN/CLOSE_EDIT_MODAL';
const TOGGLE_EDIT_SNACKBAR = 'ADMIN/TOGGLE_EDIT_SNACKBAR';

const GET_GUARDIANS = 'ADMIN/GET_GUARDIANS';
const GET_USERS = 'ADMIN/GET_USERS';
const CREATE_USER = 'ADMIN/CREATE_USER';
const REMOVE_USER = 'ADMIN/REMOVE_USER';
const EDIT_USER = 'ADMIN/EDIT_USER';

// Create form + modal + snackbar
export const changeCreateForm = registrationForm => {
  return {
    type: CHANGE_CREATE_FORM,
    payload: registrationForm
  };
};

export const toggleCreateModal = () => {
  return {
    type: TOGGLE_CREATE_MODAL
  };
};

export const toggleCreateSnackbar = () => {
  return {
    type: TOGGLE_CREATE_SNACKBAR
  };
};

// ==============================================================

// Edit form + modal + snackbar
export const changeEditForm = editForm => {
  return {
    type: CHANGE_EDIT_FORM,
    payload: editForm
  };
};

export const openEditModal = user => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: user
  };
};

export const closeEditModal = () => {
  return {
    type: CLOSE_EDIT_MODAL
  };
};

export const toggleEditSnackbar = () => {
  return {
    type: TOGGLE_EDIT_SNACKBAR
  };
};

// ==============================================================

// User actions

export const getGuardians = () => {
  return {
    type: GET_GUARDIANS,
    promise: Api.getGuardians()
  };
};

export const getUsers = () => {
  return {
    type: GET_USERS,
    promise: Api.getUsers()
  };
};

export const createUser = details => {
  const regFormCopy = { ...details };
  delete regFormCopy.passwordRep;
  return {
    type: CREATE_USER,
    promise: Api.createUser(regFormCopy)
  };
};

export const editUser = details => {
  const editFormCopy = { ...details };
  delete editFormCopy.passwordRep;
  return {
    type: EDIT_USER,
    promise: Api.editUser(editFormCopy)
  };
};

export const removeUser = id => {
  return {
    type: REMOVE_USER,
    promise: Api.removeUser(id)
  };
};

// ==============================================================

const initialForm = {
  studNo: '',
  password: '',
  passwordRep: '',
  codeName: '',
  lastName: '',
  firstName: '',
  type: '',
  email: '',
  contactNo: '',
  schoGuardian: ''
};

// Initial State
const initialState = {
  isSubmitting: false,

  createModal: false,
  createSnackbar: false,
  registrationForm: { ...initialForm },

  editUser: null,
  editSnackbar: false,
  editForm: { ...initialForm },

  users: [],
  guardians: [],
  test: ''
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_CREATE_FORM:
      return {
        ...state,
        registrationForm: payload
      };

    case TOGGLE_CREATE_MODAL:
      return {
        ...state,
        createModal: !state.createModal
      };

    case TOGGLE_CREATE_SNACKBAR:
      return {
        ...state
        // createSnackbar: !state.createSnackbar
      };

    case CHANGE_EDIT_FORM:
      return {
        ...state,
        editForm: payload
      };

    case OPEN_EDIT_MODAL:
      return {
        ...state,
        editUser: payload,
        editForm: {
          studNo: payload.studNo,
          password: payload.password,
          passwordRep: payload.password,
          codeName: payload.codeName,
          lastName: payload.lastName,
          firstName: payload.firstName,
          type: payload.type,
          email: payload.email,
          contactNo: payload.contactNo,
          schoGuardian: payload.schoGuardian
        }
      };

    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        editUser: null
      };

    case TOGGLE_EDIT_SNACKBAR:
      return {
        ...state
        // editSnackbar: !state.editSnackbar
      };

    case GET_GUARDIANS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          guardians: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case GET_USERS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          users: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CREATE_USER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isSubmitting: true
        }),
        success: prevState => ({
          ...prevState,
          registrationForm: { ...initialForm },
          users: payload.data.data
        }),
        failure: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState,
          isSubmitting: false
        })
      });

    case EDIT_USER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          editForm: { ...initialForm },
          users: state.users.map(user => {
            if (user.studNo === payload.data.data.studNo)
              return payload.data.data;
            return user;
          })
        }),
        failure: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case REMOVE_USER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          users: state.users.filter(user => user.studNo !== payload.data.data)
          // createSnackbar: !state.createSnackbar
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    default:
      return state;
  }
};

export default reducer;
