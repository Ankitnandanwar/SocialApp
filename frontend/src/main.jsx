import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SocialContextProvider from './context/SocialContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SocialContextProvider>
      <App />
    </SocialContextProvider>
  </BrowserRouter>,
)
