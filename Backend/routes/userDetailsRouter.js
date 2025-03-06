const express = require('express');

const userDetailsRouter = express.Router();

userDetailsRouter.get('/api/products', (req, res, next) => {
  const products = [{
    id: 1,
    name: 'Plain White T-shirt',
    price: '799',
    imageUrl: 'images/clothes/white-tshirt.jpg'
  }, {
    id: 2,
    name: 'Blue Ray Spectacles',
    price: '1299',
    imageUrl: 'images/accessories/blueray-specs.webp'
  }, {
    id: 3,
    name: 'Black Classic Shoes',
    price: '2599',
    imageUrl: 'images/shoes/black-classicshoes.webp'
  }, {
    id: 4,
    name: 'Timex Silver Watch',
    price: '5599',
    imageUrl: 'images/accessories/timex-silverwatch.jpeg'
  }, {
    id: 5,
    name: 'Vintage Leather Wallets',
    price: '2199',
    imageUrl: 'images/accessories/leather-wallets.webp'
  }, {
    id: 6,
    name: 'Dark Blue Jeans',
    price: '599',
    imageUrl: 'images/clothes/blue-jeans.jpg'
  }, {
    id: 7,
    name: 'Yellow High Ankles',
    price: '2199',
    imageUrl: 'images/shoes/yellow.highankles.webp'
  }, {
    id: 8,
    name: 'Black Turtleneck',
    price: '899',
    imageUrl: 'images/clothes/black-turtleneck.jpg'
  }]
  res.send(products)
});

module.exports = userDetailsRouter;