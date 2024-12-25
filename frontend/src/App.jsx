import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import { ToastContainer } from 'react-toastify'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </div>

  )
}

export default App