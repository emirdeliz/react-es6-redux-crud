import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import storeConfig from './store';
import App from './screens/app/container';
import './assets/scss/style.scss';

render(
    <Provider store={storeConfig()}>
        <App />
    </Provider>,
    document.getElementById('main-page')
);
