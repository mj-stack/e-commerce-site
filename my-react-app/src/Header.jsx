import searchSvg from './assets/icons8-search-48.png';
import profileIcon from './assets/profile.png';
import cartIcon from './assets/icons8-cart-94.png';
import { useContext } from 'react';
import { CountContext } from './MainContent';

function Header() {

  const count = useContext(CountContext);

  return(
    <>
      <header>
        <section className="left-section">
          <div className="brand-title1">MAG</div>
          <div className="brand-title2">
            <div className="brand-title2a">zine</div>
            <div className="brand-title2b">Hub</div>
          </div>
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