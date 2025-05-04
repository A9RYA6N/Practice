import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Thanks from './components/Thanks'
import Homepage from './components/Homepage'
import CreateProduct from './components/CreateProduct'
import Singleproduct from './components/Singleproduct'
import {ProductProvider} from './Productcontext'
function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/thanks' element={<Thanks/>}></Route>
          <Route path='/createprod' element={<CreateProduct/>}></Route>
          <Route path="/product/:id" element={<Singleproduct/>} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
