import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { brandOptions, categoryOptions } from '@/config'
import React from 'react'

const ShoppingViewProductTile = ({product,handleGetProductDetails,handleAddToCart}) => {
    return (
        <Card className = "w-full max-w-sm mx-auto">
            <div onClick={()=>handleGetProductDetails(product?._id)}>
                <div className='relative'>
                    <img 
                        src={product?.image}
                        alt={product?.title}
                        className='w-full p-2 h-[300px] rounded-2xl object-cover'
                    />
                    {
                        product?.salePrice > 0 && (
                            <Badge className={"absolute top-2 ml-5 mt-2 bg-red-700 hover:bg-red-500 rounded-sm"}>Sale</Badge>
                        )
                    }
                </div>
                <CardContent className = {"p-4 gap-4"}>
                    <h2 className='text-2xl font-bold'>{product?.title}</h2>
                    <div className='items-center flex-row justify-between flex'>
                        <span className='text-xl text-muted-foreground'>
                            {categoryOptions[product?.category]}
                        </span>
                        <span className='text-xl text-muted-foreground'>
                            {brandOptions[product?.brand]}
                        </span>
                    </div>
                    <div>
                        <span className={`${product?.salePrice > 0 ? 'line-through':''} text-lg text-primary font-semibold`}>₹ {product?.price}</span>
                        {
                            product?.salePrice > 0 && (
                                <span className='text-sm text-red-500'>{product?.salePrice}</span>
                            )
                        }
                    </div>
                </CardContent>
            </div>
            <CardFooter>
                <Button onClick = {()=> handleAddToCart(product._id)} className = "w-full">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ShoppingViewProductTile
