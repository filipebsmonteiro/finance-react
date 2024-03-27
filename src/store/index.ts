import { configureStore } from '@reduxjs/toolkit'
import layout from './layout'

const store = configureStore({
  reducer: {
    layout,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;