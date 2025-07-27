
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
import MyProfile from './pages/MyProfile'
import AdminHome from './pages/AdminHome'
import OrderManagement from './pages/OrderManagement'
import LogManagement from './pages/LogManagement'
import ProductStock from './pages/ProductStock'
import VoucherManagement from './pages/VoucherManagement'
import ProductManagement from './pages/ProductManagement'
import UserManagement from './pages/UserManagement'
import { AuthProvider } from './api/AuthContext'
import Login from './pages/Login'
function App() {


  return (
    <AuthProvider>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          {/* admin pages */}
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/OrderManagement" element={<OrderManagement />} />
          <Route path="/ProductManagement" element={<ProductManagement />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/VoucherManagement" element={<VoucherManagement />} />
          <Route path="/LogManagement" element={<LogManagement />} />
          <Route path="/ProductStock" element={<ProductStock />} />
        </Routes>
      </>
    </AuthProvider>

  )
}

export default App
