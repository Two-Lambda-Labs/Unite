import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './areas/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <React.Fragment>
      <CssBaseline />
      <App />
      </React.Fragment>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./areas/App', () => {
    render(App);
  });
}