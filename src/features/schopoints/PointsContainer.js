import { connect } from 'react-redux';
import Points from './Points';

import {
  getBabies,
  resetAllPoints,
  resetPoints,
  addPoints,
  subtractPoints,
  changePoints
} from './duck';

const mapStateToProps = state => {
  const { user } = state.auth;
  const { babies, points } = state.schopoints;

  return {
    // List all of the state to be connected to
    // your component here.
    user,
    babies,
    points
  };
};

const mapDispatchToProps = dispatch => ({
  handleGetBabies: id => {
    dispatch(getBabies(id));
  },
  handleResetAllPoints: id => {
    dispatch(resetAllPoints(id));
  },
  handleResetPoints: id => {
    dispatch(resetPoints(id));
  },
  handleAddPoints: details => {
    dispatch(addPoints(details));
  },
  handleSubtractPoints: details => {
    dispatch(subtractPoints(details));
  },
  handleChangePoints: content => {
    dispatch(changePoints(content));
  }
});

const PointsContainer = connect(mapStateToProps, mapDispatchToProps)(Points);

export default PointsContainer;
