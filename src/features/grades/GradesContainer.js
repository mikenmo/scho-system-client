import { connect } from 'react-redux';
import Grades from './Grades';

import {
  getGWA,
  changeAcadYear,
  changeSem,
  changeSubject,
  changeUnits,
  changeGrade,
  getGrades,
  gradeArr,
  postGrade,
  deleteGrade,
  changeErrorText
} from './duck';

const mapStateToProps = state => {
  const { user } = state.auth;
  const {
    currentGWA,
    existingSems,
    addSem,
    selectAY,
    selectSem,
    enterSubject,
    enterUnits,
    selectGrade,
    grades,
    errorText
  } = state.grades;

  return {
    user,
    grades,
    currentGWA,
    existingSems,
    addSem,
    selectAY,
    selectSem,
    enterSubject,
    enterUnits,
    selectGrade,
    errorText
  };
};
const mapDispatchToProps = dispatch => ({
  handleGetGWA: id => {
    dispatch(getGWA(id));
  },
  handleChangeAcadYear: acadYear => {
    dispatch(changeAcadYear(acadYear));
  },
  handleChangeSem: sem => {
    dispatch(changeSem(sem));
  },
  handleChangeSubject: content => {
    dispatch(changeSubject(content));
  },
  handleChangeUnits: content => {
    dispatch(changeUnits(content));
  },
  handleChangeGrade: content => {
    dispatch(changeGrade(content));
  },
  handleGetGrades: id => {
    dispatch(getGrades(id));
  },
  handlePostGrade: grade => {
    dispatch(postGrade(grade));
  },
  handleDeleteGrade: id => {
    dispatch(deleteGrade(id));
  },
  handleGradeArr: grade => {
    dispatch(gradeArr(grade));
  },
  handleChangeErrorText: text => {
    dispatch(changeErrorText(text));
  }
});

const GradesContainer = connect(mapStateToProps, mapDispatchToProps)(Grades);
export default GradesContainer;
