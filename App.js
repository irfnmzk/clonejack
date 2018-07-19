import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import common from './native-base-theme/variables/commonColor';
import App from './src';
import store from './src/store';

export default () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(common)}>
      <App />
    </StyleProvider>
  </Provider>
);
