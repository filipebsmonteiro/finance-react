import { createSlice } from '@reduxjs/toolkit'

export const layout = createSlice({
  name: 'layout',
  initialState: {
    sidebar: {
      open: true,
    },
    header: {
      title: null,
      button: null,
    }
  },
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