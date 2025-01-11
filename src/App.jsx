import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reserve" element={<Reservation />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
