import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Signup from './components/signup'
import Signin from './components/signin'
import Thanks from './components/thanks'
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
