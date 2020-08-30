import { configureStore } from '@reduxjs/toolkit';

// json and prefixed localstorage
import './storage.js';

// reducers
import app from './store/app.js';

const store = configureStore({
  reducer: {
    app,
  },
});

export default store;
