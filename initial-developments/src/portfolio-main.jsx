import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './portfolio'

createRoot(document.getElementById('root-portfolio')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)