
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import SignIn from './users/SignIn'
import { useState } from 'react'
import SignUp from './users/SignUp'

function App() {
  //로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 로그인한 회원의 상태 관리(null-로그아웃 시)
  const [userId, setUserId] = useState<string | null>(null);

  // 로그인 핸들러 함수
  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
    setUserId(username);
  }

  // 로그아웃 핸들러 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header 
            isLoggedIn={isLoggedIn}
            userId={userId}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/products/add' element={<AddProduct />} />
            <Route path='/signin' element={<SignIn onLogin={handleLogin} />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
