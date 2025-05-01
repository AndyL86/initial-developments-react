import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Profile />
    </>
  )
}

export default App
