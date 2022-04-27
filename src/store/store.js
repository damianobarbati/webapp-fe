import { configureStore } from '@reduxjs/toolkit';

// json and prefixed localstorage
import './storage.js';

// reducers
import app from './app.js';

const store = configureStore({
  reducer: {
    app,
  },
});

window.store = store; // useful for inspection with e2e testing tools

export default store;
