import { useParams, useLoaderData } from 'react-router-dom'
import AddToCartInput from '../../components/AddToCartInput/AddToCartInput'
import './ProductDetails.css'
export default function ProductDetails() {
  const { id } = useParams()
  const products = useLoaderData()
  const selectedProduct = products.filter(
    (product) => product.id === Number(id)
  )
  console.log(selectedProduct)
  return (
    <div className='product-details'>
      <h2>{selectedProduct[0].title}</h2>
      <div className='product-img'>
        <img
          src={selectedProduct[0].image}
          alt=''
        />
      </div>
      <p className='description'>{selectedProduct[0].description}</p>
      <p className='price'>${selectedProduct[0].price}</p>
      <p className={`${selectedProduct[0].rating.rate > 3 ? 'good ' : 'bad '}rating`}>Rating: {selectedProduct[0].rating.rate}/5</p>
      <div className='add-form'>
        <AddToCartInput product={selectedProduct[0]} />
      </div>
    </div>
  )
}

// Loader Function:

export async function productDetailsLoader({ params }) {
  const { id } = params
  // adding the id to the link doesn't function for my API
  const response = await fetch(
    'https://fakestoreapi.com/products/category/electronics/'
  )

  return response.json()
}
