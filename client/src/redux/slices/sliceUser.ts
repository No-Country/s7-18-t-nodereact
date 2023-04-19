import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IProfile {
  name: string;
  email: string | null | undefined;
  img_avatar: string;
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
  _id: string;
  token: string | null | undefined;
  bio?: string | null | undefined;
}
export interface IUser {
  user: IProfile;
  token: string | null | undefined;
}

const initialState: IUser = {
  user: {
    name: '',
    email: null,
    img_avatar: '',
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
    _id: '',
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
      return state;
    },
    setLogout: (state: IUser) => {
      state = initialState;
      return state;
    },
    addFavoriteUsers: (state: IUser, { payload }) => {
      state.user.favoriteUsers = [...state.user.favoriteUsers, payload];
      return state;
    },
    removeFavoriteUsers: (state: IUser, { payload }) => {
      state.user.favoriteUsers = [...state.user.favoriteUsers.filter((el) => el !== payload)];
      return state;
    },
    addFollowing: (state: IUser, { payload }) => {
      state.user.following = [...state.user.following, payload];
      return state;
    },
    removeFollowing: (state: IUser, { payload }) => {
      state.user.following = [...state.user.following.filter((el) => el !== payload)];
      return state;
    },
  },
});

export const { addFavoriteUsers, addFollowing, setLogin, setLogout, removeFavoriteUsers, removeFollowing } =
  user.actions;

export default user.reducer;
