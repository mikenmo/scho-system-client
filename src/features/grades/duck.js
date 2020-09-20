import * as Api from '../../api';
import { handle } from 'redux-pack';

const GET_GWA = 'GRADES/GET_GWA';
const GET_GRADES = 'GRADES/GET_GRADES';

const CHANGE_ACAD_YEAR = 'GRADES/CHANGE_ACAD_YEAR';

const CHANGE_SEM = 'GRADES/CHANGE_SEM';
const CHANGE_GRADE = 'GRADES/CHANGE_GRADE';

const CHANGE_SUBJECT = 'GRADES/CHANGE_SUBJECT';
const CHANGE_UNITS = 'GRADES/CHANGE_UNITS';

const GRADE_ARR = 'GRADES/GRADE_ARR';

const POST_GRADE = 'GRADES/POST_GRADE';
const DELETE_GRADE = 'GRADES/POST_GRADE';

const CHANGE_ERROR_TEXT = 'GRADES/CHANGE_ERROR_TEXT';

export const getGWA = id => {
  return {
    type: GET_GWA,
    promise: Api.getGWA(id)
  };
};

export const getGrades = id => {
  return {
    type: GET_GRADES,
    promise: Api.getGrades(id)
  };
};

export const changeAcadYear = acadYear => {
  return {
    type: CHANGE_ACAD_YEAR,
    payload: acadYear
  };
};

export const changeSem = sem => {
  return {
    type: CHANGE_SEM,
    payload: sem
  };
};

export const changeGrade = grade => {
  return {
    type: CHANGE_GRADE,
    payload: grade
  };
};

export const changeSubject = content => {
  return {
    type: CHANGE_SUBJECT,
    payload: content
  };
};

export const changeUnits = content => {
  return {
    type: CHANGE_UNITS,
    payload: content
  };
};

export const gradeArr = grade => {
  return {
    type: GRADE_ARR,
    payload: grade
  };
};

export const postGrade = grade => {
  return {
    type: POST_GRADE,
    promise: Api.postGrade(grade)
  };
};

export const deleteGrade = id => {
  return {
    type: DELETE_GRADE,
    promise: Api.deleteGrade(id)
  };
};

export const changeErrorText = text => {
  return {
    type: CHANGE_ERROR_TEXT,
    payload: text
  };
};

// Initial State
const initialState = {
  currentGWA: 0,
  grades: [],
  existingSems: [],
  addSem: [],
  selectAY: '',
  selectSem: '',
  selectGrade: 0,
  enterUnits: '',
  enterSubject: '',
  errorText: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GRADES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          grades: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case GET_GWA:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          currentGWA: payload.data.data.gwa
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CHANGE_ACAD_YEAR:
      return {
        ...state,
        selectAY: payload
      };

    case CHANGE_SEM:
      return {
        ...state,
        selectSem: payload
      };

    case CHANGE_SUBJECT:
      return {
        ...state,
        enterSubject: payload
      };

    case CHANGE_UNITS:
      return {
        ...state,
        enterUnits: payload
      };

    case CHANGE_GRADE:
      return {
        ...state,
        selectGrade: payload
      };

    case GRADE_ARR:
      return {
        ...state,
        addSem: payload
      };

    case POST_GRADE:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case DELETE_GRADE:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CHANGE_ERROR_TEXT:
      return {
        ...state,
        errorText: payload
      };

    default:
      return state;
  }
};

export default reducer;
