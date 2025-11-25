import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  // <StrictMode> remove
    <BrowserRouter basename="/front-cd-demo">
    <App />
    </BrowserRouter>
  // </StrictMode>,
)
