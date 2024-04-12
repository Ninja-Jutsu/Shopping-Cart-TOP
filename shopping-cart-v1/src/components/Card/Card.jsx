import React from 'react'
import AddToCartInput from '../AddToCartInput/AddToCartInput.jsx'
import { ItemsContext } from '../ItemsProvider/ItemsProvider.jsx'
import './Card.css'

function Card({ product, image, title, price }) {
  const [added, setAdded] = React.useState(false)
  const { items } = React.useContext(ItemsContext)
  const names = items.map((item) => item.name)

  return (
    <section>
      <div className='product-img'>
        <img
          src={image}
          alt={title}
        />
      </div>
      <div className='product-title'>
        <p>{title}</p>
      </div>
      <div className='add-form'>
        <AddToCartInput product={product} />
        <p className='price'>S${price}</p>
      </div>
    </section>
  )
}

export default Card