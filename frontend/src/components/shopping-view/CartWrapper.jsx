import React from 'react'
import { Button } from '../ui/button'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import CartItemsContent from './CartItemsContent'

const CartWrapper = ({carItems}) => {
    console.log(carItems.items)
    
    return (
        <SheetContent className = "sm:max-w-md">
            <SheetHeader>
                <SheetTitle>
                    Your Cart Items
                </SheetTitle>
            </SheetHeader>
            <div className='mt-6 space-y-6'>
                {
                    carItems && carItems?.items?.length > 0 && carItems?.items.map(item => (
                        <CartItemsContent key={item?._id} item = {item}/>
                    ))
                }
            </div>
            <div className='mt-8 space-y-4'>
                <div className='flex justify-between'>
                    <span className='font-bold'>Total</span>
                    <span className='font-bold'>₹1000</span>
                </div>
            </div>
            <Button className = {"w-full mt-7"}>CheckOut</Button>
            
        </SheetContent>
    )
}

export default CartWrapper
