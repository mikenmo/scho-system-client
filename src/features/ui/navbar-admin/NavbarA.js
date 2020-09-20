import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/input';

import Logo from '../../../assets/schosys-logo-white.png';

class NavbarA extends Component {
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
        showMenuIconButton={false}
      />
    );
  }
}

export default NavbarA;
