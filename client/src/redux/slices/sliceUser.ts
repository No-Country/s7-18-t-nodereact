import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Profile {
  name: string | null | undefined;
  email: string | null | undefined;
  img_avatar: string | null | undefined;
  admin: boolean;
  createdAt: string | null | undefined;
  favoriteUsers: string[] | null | undefined;
  favorites: string[] | null | undefined;
  isOnline: boolean;
  location: string | null | undefined;
  posts: string[] | null | undefined;
  savedPosts: string[] | null | undefined;
  updatedAt: string | null | undefined;
  _id: string | null | undefined;
}
export interface IUser {
  user: Profile;
  token: string | null | undefined;
}

const initialState: IUser = {
  user: {
    name: null,
    email: null,
    img_avatar: null,
    admin: false,
    createdAt: null,
    favoriteUsers: null,
    favorites: null,
    isOnline: false,
    location: null,
    posts: null,
    savedPosts: null,
    updatedAt: null,
    _id: null,
  },
  token: null,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state: IUser, { payload }: PayloadAction<IUser>) => {
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
