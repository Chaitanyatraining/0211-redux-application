import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../cart/Cart'
import Product from '../Product'
import Products from '../Products'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default RoutingComp