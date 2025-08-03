
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

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
import MyOrders from './pages/MyOrders'
import MyCart from './pages/Cart'
import OrderDetail from './pages/OrderDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <AuthProvider>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Cart" element={<MyCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/MyOrder" element={<MyOrders />} />
          <Route path="/Order/:id" element={<OrderDetail />} />
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
      <ToastContainer position="top-center" autoClose={1300} />
    </AuthProvider>

  )
}

export default App
