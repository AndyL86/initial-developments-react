import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from '../src/assets/images/anime-trueno.webp';

function Header() {
  return (
  <header className="portfolio-header" style={{backgroundImage: `url(${Background})`}}>
      <div className="container d-flex flex-column">
          <h1 className="masthead-heading text-uppercase mb-0">Andrew Linehan</h1>
          <p className="masthead-subheading font-weight-light mb-0">Web Developer</p>
          <p className="masthead-title font-weight-light mb-0">Front End | Full Stack | Shopify</p>
      </div>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
    </>
  )
}

export default App
