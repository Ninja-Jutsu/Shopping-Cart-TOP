import React from 'react'
import cart from '../../assets/cart.svg'
import { ItemsContext } from '../ItemsProvider/ItemsProvider'
import './Cart.css'

function Cart() {
  const { numOfItems } = React.useContext(ItemsContext)
  return (
    <div className='Cart'>
      <img
        src={cart}
        alt='Shopping Cart'
      />
      <span>{numOfItems}</span>
    </div>
  )
}

export default Cart
