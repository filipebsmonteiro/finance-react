import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.tsx'
import AppContext, { data } from "@/app/providers";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContext.Provider value={data}>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContext.Provider>
  </React.StrictMode>
)
