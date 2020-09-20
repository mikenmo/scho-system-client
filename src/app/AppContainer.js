import { connect } from 'react-redux';
import App from './App';
import { getSession } from '../features/auth/duck';

const mapStateToProps = state => {
  const { isFetchingUser, user } = state.auth;
  const { choice } = state.ui;
  return {
    choice,
    isFetchingUser,
    accountType: user ? user.type : ''
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetSession: () => {
      dispatch(getSession());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
