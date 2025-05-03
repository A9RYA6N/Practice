import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Thanks from './components/Thanks'
import Homepage from './components/Homepage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/thanks' element={<Thanks/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
