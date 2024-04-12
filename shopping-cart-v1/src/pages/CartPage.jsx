import React from 'react'
import './CartPage.css'
import { filterArray } from '../useful-func'
import { ItemsContext } from '../components/ItemsProvider/ItemsProvider'
function CartPage() {
  const { items, setItems, setNumOfItems, numOfItems } =
    React.useContext(ItemsContext)
  let [filtered, setFiltered] = React.useState(filterArray(items))

  function handleDelete(name, pieces) {
    const nextFiltered = filtered.filter((product) => product.name !== name)
    setFiltered(nextFiltered)
    setItems(nextFiltered)
    setNumOfItems((current) => current - pieces)
  }

  function handleAdd(index) {
    const nextFiltered = [...filtered]
    nextFiltered[index].pieces += 1
    setFiltered(nextFiltered)
    setNumOfItems((current) => current + 1)
  }
  function handleMinus(index) {
    if (filtered[index].pieces == 1) {
      return
    }
    const nextFiltered = [...filtered]
    nextFiltered[index].pieces -= 1
    setFiltered(nextFiltered)
    setNumOfItems((current) => current - 1)
  }

  return filtered.length === 0 ? (
    <div>Empty Cart</div>
  ) : (
    <div className='cart-cards'>
      {filtered.map(({ name, price, pieces, id }, index) => {
        return (
          <div
            className='cart-card'
            key={id}
          >
            <h2 className='title'>{name}</h2>
            <p className='unit'>Unit Price: ${price}</p>
            <p className='quantity'>
              {pieces}
              <span onClick={() => handleAdd(index)}>+</span>
              <span onClick={() => handleMinus(index)}>-</span>
            </p>
            <p className='due'>
              Total amount:<span>S${Number(price) * Number(pieces)}</span>
            </p>
            <div className='deleteBtn'>
              <button onClick={() => handleDelete(name, pieces)}>
                Delete Product
              </button>
            </div>
            {/* WARN BEFORE DELETION */}
          </div>
        )
      })}
    </div>
  )
}

export default CartPage
