import React from 'react'
import { ItemsContext } from '../ItemsProvider/ItemsProvider'

function AddToCartInput({ product, ...delegated }) {
  const { items, setItems, setNumOfItems } = React.useContext(ItemsContext)
  const [addedValue, setAddedValue] = React.useState(1)
  const [value, setValue] = React.useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    const nextItems = [
      ...items,
      {
        name: product.title,
        price: product.price,
        pieces: value,
        id: crypto.randomUUID(),
      },
    ]

    setItems(nextItems)
    setNumOfItems((current) => Number(current) + Number(value))
    setAddedValue(0)
  }

  return (
    <form
      action='#'
      className='input-form'
    >
      <input
        type='number'
        value={value}
        min='1'
        max='5'
        onChange={(e) => {
          let newValue = Number(e.target.value)
          setValue(newValue)
          setAddedValue(newValue)
        }}
        {...delegated}
      />
      <button
        type='submit'
        onClick={handleSubmit}
      >
        Add to cart
      </button>
    </form>
  )
}

export default AddToCartInput
