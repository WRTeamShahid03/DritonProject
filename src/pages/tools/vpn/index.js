import React, { useState } from 'react'
import VpnTable from './VpnTable'
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
     <VpnTable addToCart={addToCart}/>
     <BuyModal cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart}/>
    </div>
  )
}

export default Index
