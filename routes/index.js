const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
// const messageController = require('../controllers/messageController');

router.get('/', productController.getProducts);

router.get('/product/:id', productController.getProductDetails);

router.post('/cart', productController.addToCart);

router.post('/cart/remove', productController.removeFromCart);

// router.post('/sendMessage', messageController.sendMessage);

module.exports = router;