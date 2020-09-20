import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/input';

import Logo from '../../../assets/schosys-logo-white.png';

class Navbar extends Component {
  render() {
    const { handleLogout } = this.props;

    return (
      <AppBar
        title={<img src={Logo} className="logoNav" alt="logo" />}
        iconElementRight={
          <IconButton>
            <NavigationClose
              onClick={() => {
                handleLogout();
              }}
            />
          </IconButton>
        }
        onLeftIconButtonTouchTap={() => {
          this.props.handleToggleDrawer(true);
        }}
      />
    );
  }
}

export default Navbar;
