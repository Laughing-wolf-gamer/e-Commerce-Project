import React from 'react'
import checkoutImg from '../../assets/account.jpg'
import Address from '@/components/shopping-view/Address'
import { useSelector } from 'react-redux'
import CartItemsContent from '@/components/shopping-view/CartItemsContent'
import { Button } from '@/components/ui/button'

const ShoppingCheckoutPage = () => {
  const {cartItems} = useSelector(state => state.shopCardSlice);
  const totalCarAmount = cartItems &&  cartItems.items && cartItems.items.length > 0 ? cartItems.items.reduce((sum,currentItem) => sum + (currentItem?.salePrice > 0 ? currentItem.salePrice :currentItem.price) * currentItem.quantity,0): 0;
  return (
    <div className='flex flex-col'>
      <div className='relative h-[300px] w-full overflow-hidden'>
        <img
          width={'1600'}
          height={'300'}
          style={{aspectRatio:"1600/300",objectFit:'cover'}}
          src={checkoutImg}
          alt='checkoutImg'
          className='h-full w-full object-cover object-center'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5'>
        <Address />
        <div className='flex flex-col gap-4'>
          {
            cartItems && cartItems?.items?.length > 0 && cartItems?.items.map(item => (
              <CartItemsContent key={item?._id} item = {item}/>
            ))
          }
          <div className='mt-8 space-y-4'>
            <div className='flex justify-between'>
              <span className='font-bold'>Total</span>
              <span className='font-bold'>₹{totalCarAmount}</span>
            </div>
          </div>
          <div className='w-full mt-5'>
            <Button className = "w-full h-10">Go To Payment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCheckoutPage