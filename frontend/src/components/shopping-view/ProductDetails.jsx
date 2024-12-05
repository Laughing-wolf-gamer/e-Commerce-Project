import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { StarIcon } from 'lucide-react'
import { Input } from '../ui/input'

const ProductDetailsDialogue = ({ProductDetails,open,setOpen,handleAddToCart}) => {
    return (
        <Dialog open = {open} onOpenChange={setOpen}>
            <DialogContent className = "grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
                <div className='relative overflow-hidden rounded-lg'>
                    <img
                        src={ProductDetails?.image}
                        alt={ProductDetails?.title}
                        width={600}
                        height={600}
                        className='aspect-square w-full object-cover'
                    />
                </div>
                <div className=''>
                    <div>
                        <h3 className='text-2xl font-extrabold mb-6 mt-4'>
                            {ProductDetails?.title}
                        </h3>
                        <p className='text-muted-foreground'>{ProductDetails?.description}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className={`${ProductDetails?.salePrice > 0 ? "line-through":''} text-primary text-3xl font-semibold`}>₹ {ProductDetails?.price}</p>
                        {ProductDetails?.salePrice && <p className='text-2xl font-bold text-primary-foreground'>{ProductDetails?.salePrice}</p>}
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-0.5'>
                            <StarIcon className='w-5 h-5 fill-primary'/>
                            <StarIcon className='w-5 h-5 fill-primary'/>
                            <StarIcon className='w-5 h-5 fill-primary'/>
                            <StarIcon className='w-5 h-5 fill-primary'/>
                            <StarIcon className='w-5 h-5 fill-primary'/>
                        </div>
                        <span className='text-muted-foreground mt-2'>4.5</span>
                    </div>
                    <div className='mt-5 mb-5'>
                        <Button onClick = {()=>handleAddToCart(ProductDetails?._id)} className = {"w-full bg-black"}>Add To Cart</Button>
                    </div>
                    <Separator/>
                    <div className='max-h-[350px] overflow-auto'>
                        <h2 className='text-xl font-bold mb-4'>
                            Reviews
                        </h2>
                        <div className='grid gap-6 m-10'>
                            <div className='flex gap-4'>
                                <Avatar className = "w-10 h-10 border">
                                    <AvatarFallback>AS</AvatarFallback>
                                </Avatar>
                                <div className='grid gap-1'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='font-bold'>Abhishek sinha</h3>
                                    </div>
                                    <div className='flex items-center gap-0.5'>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                    </div>
                                    <p className='text-sm text-muted-foreground'>This is an amazing product</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid gap-6 m-10'>
                            <div className='flex gap-4'>
                                <Avatar className = "w-10 h-10 border">
                                    <AvatarFallback>AS</AvatarFallback>
                                </Avatar>
                                <div className='grid gap-1'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='font-bold'>Abhishek sinha</h3>
                                    </div>
                                    <div className='flex items-center gap-0.5'>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                    </div>
                                    <p className='text-sm text-muted-foreground'>This is an amazing product</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid gap-6 m-10'>
                            <div className='flex gap-4'>
                                <Avatar className = "w-10 h-10 border">
                                    <AvatarFallback>AS</AvatarFallback>
                                </Avatar>
                                <div className='grid gap-1'>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='font-bold'>Abhishek sinha</h3>
                                    </div>
                                    <div className='flex items-center gap-0.5'>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                        <StarIcon className='w-5 h-5 fill-primary'/>
                                    </div>
                                    <p className='text-sm text-muted-foreground'>This is an amazing product</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 flex gap-2'>
                            <Input 
                                placeholder = "Write a Review...."
                            />
                            <Button>Submit</Button>
                        </div>
                    </div>

                </div>

            </DialogContent>
        </Dialog>
    )
}

export default ProductDetailsDialogue