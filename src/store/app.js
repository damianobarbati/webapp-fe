import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const token = window.localStorage.get('token');
const id = token ? jwtDecode(token).id : null;

const initialState = {
  ready: false,
  token,
  id,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => {
      window.localStorage.clear();
      window.location.pathname = '/auth';
    },
    signIn: (state, { payload }) => {
      const { token } = payload;
      const { id } = jwtDecode(token);

      Object.assign(state, { token, id });
      window.localStorage.set('token', token);
      window.localStorage.set('id', id);
    },
  },
});

export default slice.reducer;
export const { actions } = slice;
