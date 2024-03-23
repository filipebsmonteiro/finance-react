import { createSlice } from '@reduxjs/toolkit'

export const sidebar = createSlice({
  name: 'sidebar',
  initialState: {
    open: true,
  },
  reducers: {
    toggle: (state) => {
      state.open = !state.open
    },
  },
})

export const { actions, selectors } = sidebar
export const { toggle } = actions

export default sidebar.reducer