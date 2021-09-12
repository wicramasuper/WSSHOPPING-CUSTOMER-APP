const Product = require("../../models/customer-core/product");

//------

const Advertisement = require("../../models/customer-core/advertisement");
const Promotion = require("../../models/customer-core/promotion")

//------

//formidable dependency for form handling
const formidable = require("formidable");
const _ = require("lodash");

const fs = require("fs");




//insert new product
exports.insert = (req, res) => {


    
        //validate all fields
        const { item_code, item_name, item_category, item_type, item_quantity, item_weight, item_price, item_description,item_shipping } = fields;

        if (!item_code || !item_name || !item_category  || !item_quantity || !item_weight || !item_price || !item_description) {
            return res.status(400).json({
                error: 'all fields must be required'
            });
        }


        let product = new Product(fields);

        if (files.item_image) {
            //console photo details like size 
            console.log("file photo", files.item_image);

            //check photo size and validate
            //1mb=1000000

            if (files.item_image.size > 1000000) {
                return res.status(400).json({
                    error: 'Image size should be less than 1mb'
                });
            }




            product.item_image.data = fs.readFileSync(files.item_image.path);
            product.item_image.contentType = files.item_image.type;
        }

       


    
}








exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                error: "Product Not Found"
            });
        }

        //if product found base on id
        req.product = product;


        //perform this middleware and contine application
        next();

    });
}

exports.readProduct = (req, res) => {
 

    req.product.item_image = undefined;

    return res.json(req.product);
}


exports.getImage = (req, res,next) => {
   

    if(req.product.item_image.data){
        res.set('Content-Type',req.product.item_image.contentType);
        return res.send(req.product.item_image.data)
    }
    next();
    
};

exports.homeProducts = (req, res) => {

    
     let order = req.query.order ? req.query.order :'asc';
     let sortBy = req.query.sortBy ? req.query.sortBy :'_id';
     let limit = req.query.limit ? parseInt(req.query.limit) :6 ;
    
    
     
     Product.find()
                    //.select("-item_image")
                    .sort([[sortBy,order]])
                    .limit(limit)
                    .exec((err,data)=>{
    
                        if(err){
                        return res.status(400).json({error:"product not found"});
                    }
                    res.json(data);
                });
                  
    
    }

    //------------------------------------------------------------------------------------

exports.advertisementById = (req, res, next, id) => {
    Advertisement.findById(id).exec((err, advertisement) => {
        if (err || !advertisement) {
            return res.status(400).json({
                error: "Advertisement Not Found"
            });
        }

        //if product found base on id
        req.advertisement = advertisement;


        //perform this middleware and contine application
        next();

    });
};

exports.readAdvertisement = (req, res) => {
 

    req.advertisement.adImage = undefined;

    return res.json(req.advertisement);
}

exports.adImage = (req, res,next) => {
    

    if(req.advertisement.adImage.data){
        res.set('Content-Type',req.advertisement.adImage.contentType);
        return res.send(req.advertisement.adImage.data)
    }
    next();
    
};

exports.adList = (request, response) => {
    let order = request.query.order ? request.query.order : 'asc';
    let sortBy = request.query.sortBy ? request.query.sortBy : '_id';
    let limit = request.query.limit ? parseInt(request.query.limit) : 100;
    Advertisement.find()
        //.select('-adImage')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, data) => {
        if (err) {
            return response.status(400).json({
                error:"Advertisement not found"
            });
        }
        response.json(data);
    });
};

exports.promotionById = (req, res, next, id) => {
    Promotion.findById(id).exec((err, promotion) => {
        if (err || !promotion) {
            return res.status(400).json({
                error: "Promotion Not Found"
            });
        }

        //if product found base on id
        req.promotion = promotion;


        //perform this middleware and contine application
        next();

    });
};

exports.readPromotion = (req, res) => {
 

    req.promotion.promoImage = undefined;

    return res.json(req.promotion);
}

exports.promoImage = (req, res,next) => {
    

    if(req.promotion.promoImage.data){
        res.set('Content-Type',req.promotion.promoImage.contentType);
        return res.send(req.promotion.promoImage.data)
    }
    next();
    
};

exports.promoList = (request, response) => {
    let order = request.query.order ? request.query.order : 'asc';
    let sortBy = request.query.sortBy ? request.query.sortBy : '_id';
    let limit = request.query.limit ? parseInt(request.query.limit) : 100;
    Promotion.find()
        //.select('-promoImage')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, data) => {
        if (err) {
            return response.status(400).json({
                error:"Promotion not found"
            });
        }
        response.json(data);
    });
};




    