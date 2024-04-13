import { NavLink, Outlet } from 'react-router-dom'
import './HelpLayout.css'
function HelpLayout() {
  return (
    <div className='help-outlet'>
      <h1>Get Help</h1>
      <nav className='helpNav'>
        <NavLink to='faq'>View The FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HelpLayout
