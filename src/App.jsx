import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import ContactsContact from './components/ContactsContact/ContactsContact'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import NotFound from './Pages/NotFound'

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<PlaceOrder />} path='/order' />
        <Route element={<NotFound />} path='*' />
      </Routes>
      <Footer />
    </div>
  )
}
