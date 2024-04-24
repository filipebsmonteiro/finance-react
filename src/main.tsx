import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.tsx'
import AppContext, { data } from "@/app/providers";
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContext.Provider value={data}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>
)
