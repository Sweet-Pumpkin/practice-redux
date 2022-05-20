import React from 'react';
import ReactDOM from 'react-dom/client';

import Redux00 from './Redux00';
import Redux01 from './Redux01';
import Redux02 from './Redux02';

import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
        <Redux00 />
        <br />
        <Redux01 />
        <br />
        <Redux02 />
    </Provider>
);