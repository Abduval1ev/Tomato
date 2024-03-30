import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import NotFound from './Pages/NotFound'
import LoginPopup from './components/LoginPopup/LoginPopup'

export default function App() {

  const [login, setLogin] = React.useState(false)

  return (
    <>
      {
        login ? <LoginPopup setLogin={setLogin} /> : <></>
      }
      <div className='App'>
        <NavBar setLogin={setLogin} />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cart />} path='/cart' />
          <Route element={<PlaceOrder />} path='/order' />
          <Route element={<Cart />} path='/cart' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
