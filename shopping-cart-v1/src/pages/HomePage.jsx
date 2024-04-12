/* eslint-disable no-unused-vars */
import React from 'react'
import Cards from '../components/Card/Card.jsx'
import useSWR from 'swr'
import Spinner from '../components/Spinner/Spinner'

const ENDPOINT = 'https://fakestoreapi.com/products/category/electronics'

async function fetcher(endpoint) {
  const response = await fetch(endpoint)
  const json = await response.json()
  return json
}

function HomePage() {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher)
  if (isLoading) {
    return [1, 2, 3, 4, 5, 6].map((value) => (
      <div
        key={value}
      >
        <Spinner />
      </div>
    ))
  }
  if (error) {
    return <p>Something went wrong!</p>
  }
  return <Cards data={data}/>
}

export default HomePage
