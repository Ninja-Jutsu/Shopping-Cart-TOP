import React from 'react'
import AddToCartInput from '../AddToCartInput/AddToCartInput.jsx'
import style from './Card.module.css'
import useSWR from 'swr'

function Cards({ data }) {
  return data?.map((product) => (
    <section
      className={style.card}
      key={product.id}
    >
      <div className='product-img'>
        <img
          src={product.image}
          alt={product.title}
          className={style.image}
        />
      </div>
      <div className='product-title'>
        <p>{product.title}</p>
      </div>
      <div className='add-form'>
        <AddToCartInput product={product} />
      </div>
    </section>
  ))
}

export default Cards
