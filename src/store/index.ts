import { configureStore } from '@reduxjs/toolkit'
import auth from '@/store/auth'
import balance from '@/store/balance'
import layout from '@/store/layout'
import ipca from './ipca';

const store = configureStore({
  reducer: {
    auth,
    balance,
    layout,
    ipca
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;