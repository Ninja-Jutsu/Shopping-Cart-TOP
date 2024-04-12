import React from 'react'
import './CartPage.css'
import { filterArray } from '../useful-func'
import { ItemsContext } from '../components/ItemsProvider/ItemsProvider'
function CartPage() {
  const { items } = React.useContext(ItemsContext)
  let [filtered, setFiltered] = React.useState(filterArray(items))
  function handleDelete(name) {
    setFiltered(filtered.filter((product) => product.name !== name))
  }
  // function handleAdd(index) {
  //   const nextFiltered = [...filtered, (filtered[index].pieces += 1)]
  //   setFiltered(nextFiltered)
  // }
  // function handleMinus(index, name) {
  //   if(filtered[index].pieces == 1){
  //     handleDelete(name)
  //   }
  //   const nextFiltered = [...filtered, (filtered[index].pieces -= 1)]
  //   setFiltered(nextFiltered)
  // }

  return filtered.length === 0 ? (
    <div>Empty Cart</div>
  ) : (
    <main className='cart-cards'>
      {filtered.map(({ name, price, pieces, id }, index) => {
        return (
          <div
            className='cart-card'
            key={id}
          >
            <h2 className='title'>{name}</h2>
            <p className='price'>{price}</p>
            <p className='quantity'>
              {pieces}
              {/* <span onClick={() => handleAdd(index, name)}>+</span>
              <span onClick={() => handleMinus(index, name)}>-</span> */}
            </p>
            <p className='due'>
              Total amount: <span>{Number(price) * Number(pieces)}</span>
            </p>
            <button onClick={() => handleDelete(name)}>Delete Item</button>
            {/* WARN BEFORE DELETION */}
          </div>
        )
      })}
    </main>
  )
}

export default CartPage
