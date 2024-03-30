import { configureStore } from '@reduxjs/toolkit'
import auth from '@/store/auth'
import balance from '@/store/balance'
import layout from '@/store/layout'

const store = configureStore({
  reducer: {
    auth,
    balance,
    layout,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;