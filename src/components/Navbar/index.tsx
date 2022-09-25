import './styles.css'
import { FaSearch, FaHeart } from "react-icons/fa";
import ShoppingCart from '../ShoppingCart';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <header>
      <nav className='navbar-container'>
        <Link to={'/'}>
          <h1 className='navbar-logo'>LOGO</h1>
        </Link>
        <div className='navbar-search-container'>
          <input type="text" className='navbar-search-text' placeholder='Pesquisa' />
          <button className='navbar-search-button'>
            <FaSearch color="#4b5c6b" />
          </button>
        </div>
        <div className='navbar-favorite-and-shopping-cart-container'>
          <div className='navbar-favorite' >
            <FaHeart color='#fff' size={"25px"} />
          </div>
          <ShoppingCart />
        </div>
      </nav>
    </header>
  )
}

export default Navbar