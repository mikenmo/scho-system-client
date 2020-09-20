import { connect } from 'react-redux';
import Sidenav from './Sidenav';
import { toggleDrawer, changeChoice } from '../duck';
const mapStateToProps = state => {
  const { isDrawerOpened } = state.ui;
  return { isDrawerOpened };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleDrawer: isDrawerOpened => {
      dispatch(toggleDrawer(isDrawerOpened));
    },
    handleChangeChoice: choice => {
      dispatch(changeChoice(choice));
    }
  };
};

const SidenavContainer = connect(mapStateToProps, mapDispatchToProps)(Sidenav);

export default SidenavContainer;
