import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Landing from './Pages/Landing'


const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/Landing' element={<Landing/>} />
    </Routes>
    </>
  )
}

export default App