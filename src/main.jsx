import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //Serve para aplicar mensagens específicos, ajudando a identificar erros
  <StrictMode>
    <App />
  </StrictMode>,
)
