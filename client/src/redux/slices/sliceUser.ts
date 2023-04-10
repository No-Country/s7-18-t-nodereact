import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Profile {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}
export interface UserState {
  authenticated?: boolean;
  user: Profile;
  expires: Date | null;
}

const initialState: UserState = {
  authenticated: false,
  user: {
    name: null,
    email: null,
    image: null,
  },
  expires: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state: UserState, { payload }: PayloadAction<UserState>) => {
      state.authenticated = true;
      state.user = payload.user;
      state.expires = payload.expires;
    },
    setLogout: (state: UserState) => {
      state = initialState;
    },
  },
});

export const { setLogin, setLogout } = user.actions;

export default user.reducer;
