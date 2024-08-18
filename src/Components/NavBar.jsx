import { NavLink } from './NavLink';
import '../assets/css/NavBar.css'

export const NavBar = () => {
    return(
      <nav>
        <ul>
          <li><NavLink to='/start'>Home</NavLink></li>
          <li><NavLink to='/calculadora'>Calculator</NavLink></li>
          <li><NavLink to='/backgroundChanger'>Background Changer</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/task-list'>Task List</NavLink></li>
        </ul>
      </nav>
    )
}