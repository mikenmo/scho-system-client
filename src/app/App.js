import React, { Component } from 'react';

import Login from '../features/auth/LoginContainer';
import Home from '../features/home/HomeContainer';
import Admin from '../features/admin/AdminContainer';
import Lib from '../features/scholib/LibContainer';
import Navbar from '../features/ui/navbar/NavbarContainer';
import NavbarA from '../features/ui/navbar-admin/NavbarAContainer';
import Sidebar from '../features/ui/sidenav/SidenavContainer';

import Grades from '../features/grades/GradesContainer';
import Points from '../features/schopoints/PointsContainer';
import Tracker from '../features/tracker/TrackerContainer';

import { ADMIN_USER } from '../constants';

class App extends Component {
  componentDidMount() {
    this.props.handleGetSession();
  }

  render() {
    const { accountType, choice } = this.props;

    if (!accountType) {
      return <Login />;
    }

    return (
      <div className="max-height">
        {/* FOR ALTERNATIVE NAVBAR -> Admin */}
        {accountType !== ADMIN_USER ? (
          <div>
            <Navbar />
            <Sidebar />
            <br />
          </div>
        ) : (
          <div>
            {/* this should be a special navbar */}
            <NavbarA />
            <br />
          </div>
        )}

        {accountType === ADMIN_USER ? (
          <Admin />
        ) : choice === 0 ? (
          <Home />
        ) : choice === 1 ? (
          <Tracker />
        ) : choice === 2 ? (
          <Grades />
        ) : choice === 3 ? (
          <Lib />
        ) : choice === 4 ? (
          <Points />
        ) : (
          <h1>Account Type does not exist / invalid choice.</h1>
        )}
      </div>
    );
  }
}

export default App;
