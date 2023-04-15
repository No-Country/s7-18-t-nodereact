import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Profile {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}
export interface IUser {
  authenticated?: boolean;
  user: Profile;
  token: string | null | undefined;
}

const initialState: IUser = {
  authenticated: false,
  user: {
    name: null,
    email: null,
    image: null,
  },
  token: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state: IUser, { payload }: PayloadAction<IUser>) => {
      state.authenticated = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    setLogout: (state: IUser) => {
      state = initialState;
    },
  },
});

export const { setLogin, setLogout } = user.actions;

export default user.reducer;
