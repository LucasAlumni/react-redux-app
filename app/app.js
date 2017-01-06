import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';
import Root from './root';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={browserHistory} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  console.log('hot reload');
  module.hot.accept('./root', () => {
    const Root = require('./root').default;
    render(
      <AppContainer>
        <Root store={store} history={browserHistory} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
