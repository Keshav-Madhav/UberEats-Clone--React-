import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
