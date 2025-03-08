import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Categories } from '../components/Categories'
import './HomePage.css'
import axios from 'axios'

function HomePage({ cartQuantity, setCartQuantity }) {

  const [ isAdded, setIsAdded] = useState(false);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
    .then((res) => {
      setProducts(res.data)
    }).catch(err => {
      console.error(err);
    }) 
  })

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
          {
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img-div">
                  <img className='product-img' src={product.imageUrl} alt="" />
                </div>
                <div className="product-info-div">
                  <p className='item-title'>{product.name}</p>
                  <p className='item-price'>{product.price}</p>
                  <div className='item-controls'>
                  <button className='fav-item'>Like it</button>
                  <button className='add-to-cart' value={false} onClick={addItem}>{isAdded ? "Added" : "Add to cart"}</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;