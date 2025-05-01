import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Shopify.css'
import Shopify from './Shopify'

createRoot(document.getElementById('root-shopify')).render(
  <StrictMode>
    <Shopify />
  </StrictMode>,
)