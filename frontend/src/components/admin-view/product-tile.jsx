import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'

const AdminProductTile = ({product,setCurrentEditingId,setOpenCreateProduct,setFormData,deleteProduct}) => {
    return (
        <Card className = "w-full max-w-sm mx-auto">
            <div>
                <div className='relative'>
                    <img src={product?.image} alt={product?.title} className='w-full h-[300px] object-cover rounded-t-lg'/>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
                </div>
                <CardContent>
                    <h2 className='text-xl font-bold mb-2 mt-2'>
                        {product?.title}
                    </h2>
                    <div className='flex items-center justify-between mb-2'>
                        <span className={`${product?.salePrice > 0 ? "line-through":""} text-gray-500 text-sm text-primary font-semibold`}>₹{product?.price}</span>
                        
                        {
                            product?.salePrice > 0 && <span className='text-gray-500 text-lg text-primary font-bold'>₹{product?.salePrice}</span>
                        }
                    </div>
                </CardContent>
                <CardFooter className = {"flex justify-between items-center"}>
                    <Button onClick = {()=> {
                        setOpenCreateProduct(true);
                        setCurrentEditingId(product?._id);
                        setFormData(product);
                    }}>Edit</Button>
                    <Button onClick = {()=>{
                        deleteProduct(product?._id);
                    }}>Delete</Button>
                </CardFooter>
            </div>
        </Card>
    )
}

export default AdminProductTile