import React from 'react'

const Cart = ({cart}) => {
  console.log(cart)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  )
}

export default Cart
