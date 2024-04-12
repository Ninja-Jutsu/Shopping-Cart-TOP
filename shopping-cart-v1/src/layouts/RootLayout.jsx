import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/main-logo.jpg'

import './RootLayout.css'
import Cart from '../components/Cart/Cart'




export default function RootLayout() {


  return (
    <div id='root-layout'>
      <header>
        <img
          src={logo}
          alt='Foot-Locker Logo'
        />
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='CartPage'>
            <Cart />
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}
