import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero_section from './components/Hero_section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero_section/>
    </>
  )
}

export default App
