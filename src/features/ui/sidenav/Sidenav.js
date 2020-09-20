import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Sidenav extends Component {
  render() {
    const {
      isDrawerOpened,
      handleToggleDrawer,
      handleChangeChoice
    } = this.props;
    return (
      <Drawer
        open={isDrawerOpened}
        onRequestChange={open => {
          handleToggleDrawer(open);
        }}
        docked={false}>
        <MenuItem onClick={() => handleChangeChoice(0)}>Home</MenuItem>
        <MenuItem onClick={() => handleChangeChoice(1)}>Org Tracker</MenuItem>
        <MenuItem onClick={() => handleChangeChoice(2)}>Your Grades</MenuItem>
        <MenuItem onClick={() => handleChangeChoice(3)}>Scho Library</MenuItem>
        <MenuItem onClick={() => handleChangeChoice(4)}>Scho Points</MenuItem>
      </Drawer>
    );
  }
}

export default Sidenav;
