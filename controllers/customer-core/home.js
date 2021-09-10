const Product = require("../../models/customer-core/product");

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
    