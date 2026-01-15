import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductDetail from './components/product[id]/ProductDetail'
import NotFound from './pages/NotFound'
import Product from './components/product/product'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Auth from './pages/Auth'
import ProfilPeage from './pages/ProfilPeage'
import FavoritesPage from './pages/FavoritesPage'


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}> 
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profil' element={<ProfilPeage/>}/>
            <Route path='/favorites' element={<FavoritesPage/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/>
            <Route path='/auth' element={<Auth />} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
