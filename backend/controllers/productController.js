const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


//Create Product -- Admin
exports.createProduct = ca


//Get All Products
exports.getAllProducts = async(req,res) => {

    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })

}

//Get Product details
exports.getProductDetails = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product
    })

}


//Update Product -- Admin 

exports.updateProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product not found",404));

    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    })
}


//Delete Product

exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404));

    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted successfully"
    })



}