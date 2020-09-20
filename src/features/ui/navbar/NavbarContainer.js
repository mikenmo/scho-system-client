import { connect } from 'react-redux';
import Navbar from './Navbar';

import { logout } from '../../auth/duck';
import { toggleDrawer } from '../duck';

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
    },
    handleToggleDrawer: isDrawerOpened => {
      dispatch(toggleDrawer(isDrawerOpened));
    }
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
