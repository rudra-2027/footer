import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />
    </Routes>
  )
}

export default App