// General comments:
// Add limits to getting of data
// Add confirmation when deleting stuff
// Make this responsive for mobile

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#0B3C5D',
    secondary1Color: '#328CC1'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
