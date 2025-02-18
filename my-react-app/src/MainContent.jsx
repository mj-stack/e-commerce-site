import shirtImg from './assets/white-tshirt.jpg'
import jeansImg from './assets/ripped-jeans.jpg'
import checkShirt from './assets/blue-checkshirt.jpg'
import blackShirt from './assets/black-tshirt.jpg'
import redCheckShirt from './assets/red-checkshirt.jpg'
import blueJeans from './assets/blue-jeans.jpg'
import yellowHoodie from './assets/yellow-hoodie.jpg'
import blackTurtleneck from './assets/black-turtleneck.jpg'
import React, { useState, createContext } from 'react';

export const CountContext = createContext();

function MainContent() {

  let [count, setCount] = useState(0);

  function AddItem() {
    setCount(count++);
  }

  return(
    <>
      <main className="mainContent">
        <div className='product-type'>
          <div className='clothes-center'>Clothes</div>
          <div className='shoes-center'>Shoes</div>
          <div className='accessories-center'>Accessories</div>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src={shirtImg} alt="" />
            </div>
            <div className="product-info-div">
              <p className='item-title'>Plain White T-shirt</p>
              <p className='item-price'>Rs. 799</p>
              <div className='item-controls'>
                <button className='fav-item'>Like it</button>
                <button className='add-to-cart' onClick={AddItem} count={count}>
                  <CountContext.Provider value={count}>Add to cart</CountContext.Provider>
                </button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-div">
              <img className='product-img' src={jeansImg} alt="" />
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
              <img className='product-img' src={checkShirt} alt="" />
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
              <img className='product-img' src={blackShirt} alt="" />
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
              <img className='product-img' src={redCheckShirt} alt="" />
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
              <img className='product-img' src={blueJeans} alt="" />
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
              <img className='product-img' src={yellowHoodie} alt="" />
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
              <img className='product-img' src={blackTurtleneck} alt="" />
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
    </>
  );
}

export default MainContent;