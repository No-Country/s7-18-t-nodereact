import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from './slices/sliceModals';

export const store = configureStore({
  reducer: { modalsReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
