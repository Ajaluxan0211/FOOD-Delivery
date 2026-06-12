import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/Cart' element={<Cart/>}/>
          <Route path='/PlaceOrder' element={<PlaceOrder/>}/>

      </Routes>
      
    </div>
  )
}

export default App

