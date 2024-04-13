import { useLoaderData, Link } from 'react-router-dom'

export default function Products() {
  const products = useLoaderData()
  return (
    <div className='products'>
      {products.map((product, index) => (
        <Link
          to={product.id.toString()}
          key={index}
        >
          <p>{product.title}</p>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  )
}

// Loader function:
export async function productsLoader() {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/electronics'
  )
  return response.json()
}
