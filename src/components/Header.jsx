import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logoImage from '../logo/ChatGPT Image Dec 13, 2025, 09_47_31 AM.png'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt="TrivaSoft Logo" className="logo-icon" />
          <span className="logo-text">trivasoft</span>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Ana Səhifə
          </Link>
          <Link 
            to="/xidmetler" 
            className={`nav-link ${isActive('/xidmetler') ? 'active' : ''}`}
          >
            Xidmətlər
          </Link>
          <Link 
            to="/haqqimizda" 
            className={`nav-link ${isActive('/haqqimizda') ? 'active' : ''}`}
          >
            Haqqımızda
          </Link>
          <Link 
            to="/faq" 
            className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
          >
            FAQ
          </Link>
          <Link 
            to="/elaqe" 
            className={`nav-link ${isActive('/elaqe') ? 'active' : ''}`}
          >
            Əlaqə
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

