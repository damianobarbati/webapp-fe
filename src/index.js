require('preact/debug');

import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'react-jss';
import { theme } from './style.js';

import Router from './Router.js';

Storage.prototype.set = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));
Storage.prototype.get = key => JSON.parse(window.localStorage.getItem(key));
Storage.prototype.remove = key => window.localStorage.removeItem(key);

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    </React.StrictMode>
);

render(<App />, document.body);

// parcel bug: https://github.com/parcel-bundler/parcel/issues/1317#issuecomment-416097040
if (module && module.hot)
    module.hot.accept(() => window.location.reload());
