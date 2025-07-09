
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Blogs from './pages/Blog'
import BlogDetail from './pages/BlogDetail'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App
