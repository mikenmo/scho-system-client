import { connect } from 'react-redux';
import Template from './Template';

const mapStateToProps = state => {
  return {
    // List all of the state to be connected to
    // your component here.
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // List all of the actions here. Import first from the duck
    // then add them here.
    // action1: () => {
    //   dispatch(action1());
    // },
  };
};

const TemplateContainer = connect(mapStateToProps, mapDispatchToProps)(
  Template
);

export default TemplateContainer;
