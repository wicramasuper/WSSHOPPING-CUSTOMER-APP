const express = require('express');
const router = express.Router();

const {homeProducts,getImage,productById,readProduct} = require("../../controllers/customer-core/home");
//return all the products
//route for get single product
router.param("productId",productById);
router.get('/customer/product/:productId',readProduct);
router.get('/products',homeProducts);
router.get('/customer/product/image/:productId',getImage);

module.exports = router;