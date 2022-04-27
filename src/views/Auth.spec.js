import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import store from '../store/store.js';
import queryClient, { queryCache } from '../query.js';
import Auth from './Auth.js';

// const url = screen.logTestingPlaygroundURL();

// eslint-disable-next-line react/prop-types
const AppWrapper = ({ children }) => (
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

const getComponent = () =>
  render(
    <AppWrapper>
      <Auth />
    </AppWrapper>
  );

describe('Auth', () => {
  beforeEach(queryCache.clear.bind(queryCache));

  it('render', () => {
    const component = getComponent();

    const label = component.container.querySelector('.control label[for=email]');
    expect(label.innerHTML).toEqual('Email');

    const input = component.container.querySelector('.control input[name=email]');
    expect(input.value).toEqual('');
  });

  it('submit failure', async () => {
    getComponent();

    const email_input = screen.getByLabelText('Email');
    const password_input = screen.getByLabelText('Password');
    const submit_btn = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(email_input, { target: { value: 'bruce.wayne@gmail.com' } });
    fireEvent.change(password_input, { target: { value: 'ciccio' } });
    fireEvent.click(submit_btn);

    const copy = await waitFor(() => screen.getByRole('alert'));
    expect(copy).toHaveTextContent(/Unauthorized/);
  });

  it('submit success', async () => {
    getComponent();

    const email_input = screen.getByLabelText('Email');
    const password_input = screen.getByLabelText('Password');
    const submit_btn = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(email_input, { target: { value: 'bruce.wayne@gmail.com' } });
    fireEvent.change(password_input, { target: { value: 'bruce' } });
    fireEvent.click(submit_btn);

    const copy = await waitFor(() => screen.getByRole('alert'));
    expect(copy).toHaveTextContent(/Success/);
  });
});
