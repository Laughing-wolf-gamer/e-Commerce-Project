import Cart from "../../db/models/cart.model.js";
import Product from "../../db/models/product.model.js";

export const addToCart = async (req,res)=>{
    try {
        const{userId,productId,quantity} = req.body;
        if(!userId || !productId || !quantity) return res.status(401).json({Success:false,message:"Please enter All Data"});
        const product = await Product.findById(productId);
        if(!product) return res.status(404).json({Success:false,message:"Product Not Found"});
        let cart = await Cart.findOne({userId});
        if(!cart){
            cart = new Cart({userId, items:[{productId, quantity}]});
        }else{
            const productIndex = cart.items.findIndex(i => i.productId.toString() === productId.toString());
            if(productIndex > -1){
                cart.items[productIndex].quantity += quantity;
            }else{
                cart.items.push({productId, quantity});
            }
        }
        await cart.save();
        res.status(200).json({Success:true,message: "Item added to cart",cart});
    } catch (error) {
        console.error(`Failed to add to cart: ${error}`)
        res.status(500).json({Success:false, message: 'Internal Server Error'});
    }
}
export const removeFromCart = async  (req,res)=>{
    try {
        const {userId,productId} = req.params;
        if(!userId || !productId) return res.status(401).json({Success:false,message:"Please enter All Data"});
        const cart = await Cart.findOneAndUpdate({userId}).populate({
            path: 'items.productId',
            select: 'image title price salePrice'
        })
        if(!cart) return res.status(404).json({Success:false,message: "Cart Not Found"});
        cart.items = cart.items.filter(item => item.productId.toString() !== productId)
        await cart.save();
        await Cart.populate({
            path: 'items.productId',
            select: 'image title price salePrice'
        })
        const populateCartItems  = cart.items.map(item => ({
            productId: item.productId ? item.productId._id:null,
            image:item.productId? item.productId.image :null,
            title: item.productId ?  item.productId.title: 'Product not found',
            price: item.productId ?  item.productId.price : null,
            salePrice: item.productId ? item.productId.salePrice:null,
            quantity: item.quantity,

        }))
        res.status(200).json({Success:true,message:"Successfully Updated cart", data:{
            ...cart._doc,
            items:populateCartItems,
        }});
    } catch (error) {
        console.error(`Failed to Remove from cart: ${error}`)
        res.status(500).json({Success:false, message: 'Internal Server Error'});
    }
}
export const fetchCart = async (req,res)=>{
    try {
        const {userId} = req.params;
        const cart = await Cart.findOne({userId}).populate({
            path: 'items.productId',
            select: 'image title price salePrice'
        });
        if(!cart) return res.status(404).json({Success:false,message: "Cart Not Found"});
        const validItems = cart.items.filter(item => item.productId);
        if(validItems.length > 0){
            cart.items = validItems
            await cart.save();
        }
        const populateCartItems = validItems.map(item => ({
            productId: item.productId._id,
            image:item.productId.image,
            title: item.productId.title,
            price: item.productId.price,
            salePrice: item.productId.salePrice,
            quantity: item.quantity,

        }))
        res.status(200).json({Success:true,message:"Successfully found cart", data:{
            ...cart._doc,
            items:populateCartItems,
        }});
    } catch (error) {
        console.error(`Failed to fetch cart: ${error}`)
        res.status(500).json({Success:false, message: 'Internal Server Error'});
    }
}
export const updateCartQuantity = async (req,res)=>{
    try {
        const{userId,productId,quantity} = req.body;
        if(!userId || !productId || quantity) return res.status(401).json({Success:false,message:"Please enter All Data"});
        const product = await Product.findById(productId);
        if(!product) return res.status(404).json({Success:false,message:"Product Not Found"});
        const cart = await Cart.findOne({userId});
        if(!cart) return res.status(404).json({Success:false,message: "Cart Not Found"});
        const findCurrentProduct = cart.items.findIndex(item => item.productId.toString() === productId)
        if(!findCurrentProduct) return res.status(404).json({Success:false,message:'Cart Item Not Found'});
        cart.items[findCurrentProduct].quantity = quantity;
        await cart.save();
        await cart.populate({
            path: 'items.productId',
            select: 'image title price salePrice'
        });
        const populateCartItems  = cart.items.map(item => ({
            productId: item.productId ? item.productId._id:null,
            image:item.productId? item.productId.image :null,
            title: item.productId ?  item.productId.title: 'Product not found',
            price: item.productId ?  item.productId.price : null,
            salePrice: item.productId ? item.productId.salePrice:null,
            quantity: item.quantity,

        }))
        res.status(200).json({Success:true,message:"Successfully Updated cart", data:{
            ...cart._doc,
            items:populateCartItems,
        }});
    } catch (error) {
        console.error(`Failed to update cart quantity: ${error}`)
        res.status(500).json({Success:false, message: 'Internal Server Error'});
    }
}
