import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextProvider } from './context/ContextProvider.tsx'
import { Providers } from './config/Provider/Provider.tsx'
import 'intro.js/introjs.css'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Providers>
          <ContextProvider>
              <ReactNotifications/>
              <App/>
          </ContextProvider>
      </Providers>  
  </React.StrictMode>,
)
