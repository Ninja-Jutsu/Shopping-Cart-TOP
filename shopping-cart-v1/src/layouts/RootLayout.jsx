import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/challenger.png'

import './RootLayout.css'
import Cart from '../components/Cart/Cart'

export default function RootLayout() {
  return (
    <div id='root-layout'>
      <header>
        <NavLink className='logo' to='/'>
          <img
            src={logo}
            alt='Foot-Locker Logo'
          />
        </NavLink>
        <nav>
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
