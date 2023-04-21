import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalsState {
  modalSearch: boolean;
  drawerMenuLeft: boolean;
  modalNewRecipe: boolean;
  modalDetailsRecipe: boolean;
  modalSettingProfile: boolean;
  modalChangePassword: boolean;
  modalPersonalInformation: boolean;
}

const initialState: ModalsState = {
  modalSearch: false,
  drawerMenuLeft: false,
  modalNewRecipe: false,
  modalDetailsRecipe: false,
  modalSettingProfile: false,
  modalChangePassword: false,
  modalPersonalInformation: false,
};

export const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state: ModalsState, { payload }: PayloadAction<string>) => {
      state[payload] = true;
    },
    hideModal: (state: ModalsState, { payload }: PayloadAction<string>) => {
      state[payload] = false;
    },
  },
});

export const { showModal, hideModal } = modals.actions;

export default modals.reducer;
