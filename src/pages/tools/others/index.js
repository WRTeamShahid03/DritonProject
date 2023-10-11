import React, { useState } from 'react'
import Others from './Others'
import BuyModal from '../BuyModal'

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false)

  const addToCart = (item) => {
    setShowCart(true)
    setCartItems([...cartItems, item]);

  };
  return (
    <div>
      <Others addToCart={addToCart} />
      <BuyModal cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />
    </div>
  )
}

export default Index
