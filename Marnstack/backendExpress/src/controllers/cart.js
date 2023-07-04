const Product = require("../model/products");
const cloudinary = require("../cloudinary/cloudinary")
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const CartProduct = require("../model/cartProducts");





exports.cartDetails = catchAsyncErrors(async (req, res, next) => {
    let getId = req.params.id
    let idDetails = await Product.findById(getId)
    const data = {
        userId: req.user._id,
        product_id: idDetails._id
    }
    const register = await CartProduct.create(data)

    if (!idDetails) {
        res.status(404).json({ "invalid product id": "" })
    }
    else {
        res.status(200).json({ "product Add Successfully!": register })
        //  }
    }
    // catch(e){
    // console.log("error")

    // }

})

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    try {
        const get_id = req.params.id
        const id = await Product.findByIdAndDelete(get_id, {
           new: true
        })
        if (!id) {
           res.status(404).send()
        }
        else {
           res.status(200).send(id)
        }
     } catch (e) {
        res.status(400).send(e)
     }

})

exports.allCartDetails = catchAsyncErrors(async (req, res, next) => {
    
    try {
        // const userId=req.user._id
        const userDetails = await CartProduct.find()


        res.status(200).send(userDetails)
    } catch (e) {
        res.status(400).send(e)
    }


})

exports.PatchCartDetails = catchAsyncErrors(async (req, res, next) => {
    try {
        const get_id = req.params.id 

        const id = await Product.findByIdAndUpdate(get_id, req.body, {
            new: true
        })


        console.log("mbsnvdjfhjbdjdddddddddd",id) 

        if (!id) {
            res.status(404).send()
        }
        else {
            res.status(200).send(id)
        }
    } catch (e) {
        res.status(400).send(e)
    }


})