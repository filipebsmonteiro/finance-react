import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebar'

const store = configureStore({
  reducer: {
    sidebar,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;