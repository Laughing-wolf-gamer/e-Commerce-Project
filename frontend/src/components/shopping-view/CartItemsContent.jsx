import React from 'react'

const CartItemsContent = ({item}) => {
    console.log(item);
    return (
        <div className='flex items-center space-x-4'>
            <img src={item?.image} alt={item?.title} className='w-20 h-20 object-cover rounded-r-sm'
            />
        </div>
    )
}

export default CartItemsContent
