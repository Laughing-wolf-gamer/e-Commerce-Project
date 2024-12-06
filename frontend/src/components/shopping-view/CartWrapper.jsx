import React from 'react'
import { Button } from '../ui/button'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import CartItemsContent from './CartItemsContent'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItems, updateToCart } from '@/store/shop/car-slice'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'

const CartWrapper = ({carItems,setOpenCartSheet}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(state => state.auth);
    const {toast} = useToast();
    const handleOnCartItemDelete = async (item) => {
        await dispatch(deleteCartItems({userId:user.id,productId:item?.productId}));
    }
    const handleUpdateCartItemQuantity = async (item,updateAmount)=>{
        const amount = updateAmount === "plus" ? item?.quantity + 1 : item?.quantity - 1;
        const updated = await dispatch(updateToCart({userId:user.id,productId:item?.productId,quantity:amount}))
        if(updated?.payload?.Success){
            toast({
                title: "Cart Item Updated Successfully",
                description: updated?.payload?.message,
            });
        }
    }
    const totalCarAmount = carItems &&  carItems.items && carItems.items.length > 0 ? carItems.items.reduce((sum,currentItem) => sum + (currentItem?.salePrice > 0 ? currentItem.salePrice :currentItem.price) * currentItem.quantity,0): 0;
    
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
                        <CartItemsContent key={item?._id} item = {item} handleOnCartItemDelete={handleOnCartItemDelete} handleUpdateCartItemQuantity={handleUpdateCartItemQuantity}/>
                    ))
                }
            </div>
            <div className='mt-8 space-y-4'>
                <div className='flex justify-between'>
                    <span className='font-bold'>Total</span>
                    <span className='font-bold'>₹ {totalCarAmount}</span>
                </div>
            </div>
            <Button onClick = {()=> {
                navigate("/shop/checkout");
                setOpenCartSheet(false);
            }} className = {"w-full mt-7"}>CheckOut</Button>
            
        </SheetContent>
    )
}

export default CartWrapper
