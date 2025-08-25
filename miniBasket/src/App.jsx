import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetail from "./components/product_detail";
import Orders from "./components/orders";
import Product from "./components/product";

export default function App() {

  return (
    
        <>
         <Router>
         <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
         <Route path="/ProductDetail/:id" element={<ProductDetail />} />
         <Route path="/orders" element={<Orders />} />
        </Routes>
        </Router>
        </>
  )
}

