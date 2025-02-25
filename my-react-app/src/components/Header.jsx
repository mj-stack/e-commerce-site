import { Link } from 'react-router';
import './Header.css'
import searchSvg from '../assets/icons/icons8-search-48.png';
import profileIcon from '../assets/icons/profile.png';
import cartIcon from '../assets/icons/icons8-cart-94.png';

function Header() {

  return(
    <>
      <header>
        <section className="left-section">
          <p className='brand-title-para'>
            <Link to="/" className="brand-title">
              MAGzine
            </Link>
          </p>
        </section>

        <section className="middle-section">
          <div className='search-div'>
            <input className="search-input" type="text" placeholder="Search your fit..."/>
            <img className='search-icon' src={searchSvg} alt="" />
          </div>
        </section>

        <section className="right-section">
          <img className='profile-icon' src={profileIcon} alt="" />
          <div className='cart-icon-div'>
            <img className='cart-icon' src={cartIcon} alt="" />
            <div className='item-count'>0</div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;