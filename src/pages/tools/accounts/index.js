import React, { useState } from 'react'
import Accounts from './Accounts';
import BuyModal from '../BuyModal';
import { toast } from 'react-hot-toast';

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false)

  const addToCart = (item) => {
    setShowCart(true)
    const isItemInCart = cartItems.some((cartItem) => cartItem.type === item.type);
  
    if (isItemInCart) {
      toast.error('Already Selected', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setCartItems([...cartItems, item]);
      
    }
  };
  return (
    <>
      <Accounts addToCart={addToCart} />
      <BuyModal cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart}/>
    </>
  )
}

export default Index
