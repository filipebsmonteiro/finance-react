import { createSlice } from '@reduxjs/toolkit'
import { LayoutState } from './state';

const initialState: LayoutState = {
  sidebar: {
    open: true,
  },
  header: {
    title: null,
    button: {
      action: null,
      label: null,
    },
  }
};

export const layout = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    setTitle: (state, { payload }) => {
      state.header.title = payload;
    },
  },
})

export const { actions, selectors } = layout
export const { toggleSidebar, setTitle } = actions

export default layout.reducer