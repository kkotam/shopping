import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './layout/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import SignIn from './users/SignIn'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/products/:id' element={<ProductInfo/>}/>
            <Route path='/products/add' element={<AddProduct/>}/>
            <Route path='/products/signin' element={<SignIn/>}/>
          </Routes>
        </BrowserRouter>
      </section>

    </>
  )
}

export default App
