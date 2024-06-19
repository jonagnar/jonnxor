import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '@/lib/createAppSlice';

export interface NavbarSliceState {
  opened: boolean;
}

const initialState: NavbarSliceState = {
  opened: false,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const navbarSlice = createAppSlice({
  name: 'navbar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    open: create.reducer((state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.opened = true;
    }),
    close: create.reducer((state) => {
      state.opened = false;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    toggle: create.reducer((state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectOpened: (navbar) => navbar.opened,
  },
});

// Action creators are generated for each case reducer function.
export const { open, close, toggle } = navbarSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectOpened } = navbarSlice.selectors;
