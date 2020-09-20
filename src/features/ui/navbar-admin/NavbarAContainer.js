import { connect } from 'react-redux';
import NavbarA from './NavbarA';

import { logout } from '../../auth/duck';

const mapStateToProps = state => {
  const { user } = state.auth;

  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logout());
    }
  };
};

const NavbarAContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarA);

export default NavbarAContainer;
