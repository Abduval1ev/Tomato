import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ContactsContact from './components/ContactsContact/ContactsContact'

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route element={<ContactsContact />} path='/contacts' />
      </Routes>
      <Footer />
    </div>
  )
}
