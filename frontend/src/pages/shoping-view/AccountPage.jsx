import React from 'react'
import accImg from '../../assets/account.jpg'
const ShoppingAccountPage = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative h-[300px] w-full overflow-hidden'>
                    <img
                        width={'1600'}
                        height={'300'}
                        style={{aspectRatio:"1600/300",objectFit:'cover'}}
                        src={accImg}
                        alt='accountImg'
                        className='h-full w-full object-cover object-center'
                    />
            </div>
        </div>
    )
}

export default ShoppingAccountPage
