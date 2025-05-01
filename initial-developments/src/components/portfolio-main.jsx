import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './PortfolioCards.css'
import Portfolio from './Portfolio'

createRoot(document.getElementById('root-portfolio')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)