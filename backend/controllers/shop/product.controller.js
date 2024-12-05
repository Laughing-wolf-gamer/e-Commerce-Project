import Product from "../../db/models/product.model.js";

export const getFilteredProducts = async(req,res)=>{
    try {
        const {category = [],brand = [],sortby = 'price-low-to-high'} = req.query;
        let filters = {};
        if(category.length > 0){
            filters.category = {$in: category.split(",")};
        }
        if(brand.length > 0){
            filters.brand = {$in: brand.split(",")};
        }
        let sort = {};
        switch(sortby){
            case "price-low-to-high":
                sort.price = 1;
                break;
            case "price-high-to-low":
                sort.price = -1;
                break;
            case "title-a-2-z":
                sort.title = 1;
                break;
            case "title-z-2-a":
                sort.title = -1;
                break;
            default:
                sort.price = 1;
                break;
        }
        const products = await Product.find(filters).sort(sort);
        res.status(200).json({Success: true, message: 'Products fetched successfully', products});
    } catch (error) {
        console.error(`Error processing ${error.message}}`)
        res.status(500).json({Success: false, message: 'Internal Server Error'});
    }
}

export const getProductDetailsById = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product) res.status(404).json({Success: false, message: 'Product not found'});
        res.status(200).json({Success: true, message: 'Product fetched successfully', product});
    } catch (error) {
        console.error(`Error processing ${error.message}`);
        res.status(500).json({Success: false, message: 'Internal Server Error'});
    }
}