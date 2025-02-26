import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Categories } from '../components/Categories'
import './HomePage.css'

function HomePage({ cartQuantity, setCartQuantity }) {

  const [ isAdded, setIsAdded] = useState(false);

  function addItem(event) {
    setCartQuantity(cartQuantity + 1);
    
    setIsAdded(() => {
      if(event.target.value === false) {
        return true;
      } 
    })
  }

  return(
    <>
      <Header cartQuantity={cartQuantity} />
      <Categories />

      <main className="mainContent">
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/white-tshirt.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Plain White T-shirt</p>
              <p className='item-price'>Rs. 799</p>
              <div className='item-controls'>
              <button className='fav-item'>Like it</button>
              <button className='add-to-cart' value={false} onClick={addItem}>{isAdded ? "Added" : "Add to cart"}</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/blueray-specs.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Blue Ray Spectacles</p>
              <p className='item-price'>Rs. 1299</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/black-classicshoes.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Black Classic Shoes</p>
              <p className='item-price'>Rs. 2599</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/timex-silverwatch.jpeg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Timex Silver Watch</p>
              <p className='item-price'>Rs. 5599</p>
              <div className='item-controls'>
              <button className='fav-item'>Like it</button>
              <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/leather-wallets.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Vintage Leather Wallets</p>
              <p className='item-price'>Rs. 2199</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/blue-jeans.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Dark Blue Jeans</p>
              <p className='item-price'>Rs. 599</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/yellow.highankles.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Yellow High Ankles</p>
              <p className='item-price'>Rs. 2199</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/black-turtleneck.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Black Turtleneck</p>
              <p className='item-price'>Rs. 899</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={addItem}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;