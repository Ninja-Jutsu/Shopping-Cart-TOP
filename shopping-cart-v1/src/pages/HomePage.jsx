/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card/Card.jsx'
import useSWR from 'swr'
import Spinner from '../components/Spinner/Spinner'
import './HomePage.css'


const ENDPOINT = 'https://fakestoreapi.com/products/category/electronics'

async function fetcher(endpoint) {
  const response = await fetch(endpoint)
  const json = await response.json()
  return json
}

function HomePage() {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher)
  if (isLoading) {
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    )
  }
  if (error) {
    return <p>Something went wrong!</p>
  }
  if (data) {
    console.log(data)
    return data.map((product) => {
      return (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          product={product}
        />
      )
    })
  }
}

export default HomePage
