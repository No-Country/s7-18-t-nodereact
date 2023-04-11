import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalsState {
  modalSearch: boolean;
  drawerMenuLeft: boolean;
  drawerMenuRight: boolean;
}

const initialState: ModalsState = {
  modalSearch: false,
  drawerMenuLeft: false,
  drawerMenuRight: false,
};

export const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state: any, { payload }: PayloadAction<string>) => {
      state[payload] = true;
    },
    hideModal: (state: any, { payload }: PayloadAction<string>) => {
      state[payload] = false;
    },
  },
});

export const { showModal, hideModal } = modals.actions;

export default modals.reducer;
