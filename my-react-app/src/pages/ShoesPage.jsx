import Header from '../components/Header';
import Footer from '../components/Footer';
import { Categories } from '../components/Categories';
import './ShoesPage.css'

export function ShoesPage() {
  return(
    <>
      <Header />
      <Categories />
      
      <main className="mainContent">
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/normal-blueshoes.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Normal Blue Shoes</p>
              <p className='item-price'>Rs. 1599</p>
              <div className='item-controls'>
              <button className='fav-item'>Like it</button>
              <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/funky-sportshoes.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Funky Sneakers</p>
              <p className='item-price'>Rs. 2599</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
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
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/black-highheels.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Black High Heels</p>
              <p className='item-price'>Rs. 1799</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/plain-leatherbelly.jpeg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Plain Leather Belly</p>
              <p className='item-price'>Rs. 1599</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
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
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/white-sneakers.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>White Sneakers</p>
              <p className='item-price'>Rs. 2999</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/shoes/red-highheels.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Red High Heels</p>
              <p className='item-price'>Rs. 2899</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />  
    </>
  );
}