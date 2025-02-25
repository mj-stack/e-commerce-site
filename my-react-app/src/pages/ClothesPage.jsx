import Header from '../components/Header';
import Footer from '../components/Footer';
import { Categories } from '../components/Categories';
import './ClothesPage.css'

export function ClothesPage() {
  return(
    <>
      <Header />
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
              <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/ripped-jeans.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Blue Ripped Jeans</p>
              <p className='item-price'>Rs. 599</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/blue-checkshirt.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Blue Checked Shirt</p>
              <p className='item-price'>Rs. 699</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/black-tshirt.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Plain Black T-shirt</p>
              <p className='item-price'>Rs. 799</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/red-checkshirt.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Red Checked Shirt</p>
              <p className='item-price'>Rs. 699</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
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
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src="images/clothes/yellow-hoodie.jpg" alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Yello Hoodie</p>
              <p className='item-price'>Rs. 999</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart'>Add to cart</button>
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