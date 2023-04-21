import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from './slices/sliceModals';
import userReducer from './slices/sliceUser';

export const store = configureStore({
  reducer: { modalsReducer, userReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
