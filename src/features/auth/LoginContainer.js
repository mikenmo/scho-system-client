import { connect } from 'react-redux';
import Login from './Login';
import { login, changeStudNo, changePassword } from './duck';

const mapStateToProps = state => {
  const { studNo, password, hasTriedLoggingIn } = state.auth;
  return {
    studNo,
    password,
    hasTriedLoggingIn
  };
};

const mapDispatchToProps = dispatch => ({
  handleChangeStudNo: studNo => {
    dispatch(changeStudNo(studNo));
  },
  handleChangePassword: password => {
    dispatch(changePassword(password));
  },
  handleLogin: credentials => {
    dispatch(login(credentials));
  }
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
