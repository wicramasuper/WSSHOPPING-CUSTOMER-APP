const express = require('express');
const router = express.Router();

const {homeProducts,getImage,productById,readProduct, advertisementById, adList, adImage, readAdvertisement, promotionById, promoList, promoImage, readPromotion} = require("../../controllers/customer-core/home");
//return all the products
//route for get single product
router.param("productId",productById);
router.get('/customer/product/:productId',readProduct);
router.get('/products',homeProducts);
router.get('/customer/product/image/:productId',getImage);


//------------------

router.param("advertisementId", advertisementById)
router.get('/customer/advertisement/:advertisementId', readAdvertisement);
router.get('/advertisements', adList);
router.get('/customer/advertisement/image/:advertisementId', adImage);

router.param("promotionId", promotionById)
router.get('/customer/promotion/:promotionId', readPromotion);
router.get('/promotions', promoList);
router.get('/customer/promotion/image/:promotionId', promoImage);

module.exports = router;