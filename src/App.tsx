
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
