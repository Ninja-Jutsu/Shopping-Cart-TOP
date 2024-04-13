import { Outlet } from 'react-router-dom'
export default function ProductLayout() {
  return (
    <div>
      <h2 id='main-header'>Product Details</h2>
      <Outlet />
    </div>
  )
}
