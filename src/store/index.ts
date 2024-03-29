import { configureStore } from '@reduxjs/toolkit'
import balance from './balance'
import layout from './layout'

const store = configureStore({
  reducer: {
    balance,
    layout,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;