import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IProfile {
  name: string | null | undefined;
  email: string | null | undefined;
  img_avatar: string | null | undefined;
  admin: boolean;
  createdAt: string | null | undefined;
  favoriteUsers: string[];
  favorites: string[];
  followers: string[];
  following: string[];
  isOnline: boolean;
  location: string | null | undefined;
  posts: string[];
  savedPosts: string[];
  updatedAt: string | null | undefined;
  _id: string | null | undefined;
  token: string | null | undefined;
}
export interface IUser {
  user: IProfile;
  token: string | null | undefined;
}

const initialState: IUser = {
  user: {
    name: null,
    email: null,
    img_avatar: null,
    admin: false,
    createdAt: null,
    favoriteUsers: [],
    favorites: [],
    followers: [],
    following: [],
    isOnline: false,
    location: null,
    posts: [],
    savedPosts: [],
    updatedAt: null,
    _id: null,
    token: null,
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
    toggleFollowed: (state: IUser, { payload }) => {
      state.user.following.includes(payload)
        ? (state.user.following = [...state.user.following.filter((el) => el !== payload)])
        : state.user.following.push(payload);
    },
  },
});

export const { setLogin, setLogout, toggleFollowed } = user.actions;

export default user.reducer;
