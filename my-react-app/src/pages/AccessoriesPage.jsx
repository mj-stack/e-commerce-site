import Header from '../components/Header'
import { Categories } from '../components/Categories'
import Footer from '../components/Footer'
import './AccessoriesPage.css'

export function AccessoriesPage() {
  return(
    <>
      <Header />
      <Categories />
      
      <main className="mainContent">
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/timex-silverwatch.jpeg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Timex Silver Watch</p>
              <p className='item-price'>Rs. 5599</p>
              <div className='item-controls'>
              <button className='fav-item'>Like it</button>
              <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/snake-leatherbelts.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Snake Leather Belts</p>
              <p className='item-price'>Rs. 999</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
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
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/quartz-classicwatch.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Quartz Classic Watch</p>
              <p className='item-price'>Rs. 3999</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
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
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/dogtag-chain.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Dogtag Chain</p>
              <p className='item-price'>Rs. 599</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/golden-shinyrings.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Golden Shiny Rings</p>
              <p className='item-price'>Rs. 999</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/accessories/white-smartwatch.webp" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>White Smartwatch</p>
              <p className='item-price'>Rs. 2599</p>
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
  )
}