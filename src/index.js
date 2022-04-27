import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import store from './store/store.js';
import queryClient from './query.js';
import Router from './Router.js';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(<App />);
