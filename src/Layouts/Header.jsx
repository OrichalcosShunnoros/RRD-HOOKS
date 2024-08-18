import { NavBar } from "../Components/NavBar"
import { Logo } from '../Components/LogoRct'
import '../assets/css/Header.css'

export const Header = () => {
    return (
        <header>
          <div className='contentH'>
            <Logo className='lg' />
            <h1>React Router Dom - Hooks practice</h1>
          </div>
          <NavBar />
        </header>
    )
  }