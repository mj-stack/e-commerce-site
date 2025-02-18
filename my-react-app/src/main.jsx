import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './header.css'
import './mainContent.css'
import './footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
