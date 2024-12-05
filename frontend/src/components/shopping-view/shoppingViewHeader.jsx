import { Blinds, ChevronDown, House, LogOutIcon, ShoppingCart, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { shoppingviewHeaderMenuItems } from '@/config'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { logoutUser } from '@/store/auth-slice'
import CartWrapper from './CartWrapper'
import { fetchCartItems } from '@/store/shop/car-slice'



const MenuItems = ()=>{
    return <nav className='flex flex-col mb-3 lg:items-center gap-7 lg:flex-row'>
        {
            shoppingviewHeaderMenuItems.map((item)=> (
                <Link key={item.id} to = {item.path} className='text-sm font-medium'>
                    {item.label}
                </Link>
            ))
        }
    </nav>
}
const HeaderRightContent = ({user})=>{
    const [openCardSheet,setOpenCartSheet] = useState(false);
    const {cartItems} = useSelector(state => state.shopCardSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const HandleLogOut = async (e)=>{
        dispatch(logoutUser())
    }
    useEffect(()=>{
        dispatch(fetchCartItems({userId:user?.id}))
    },[])
    return <div className='flex lg:items-center lg:flex-row flex-col gap-4'>
        <Sheet open = {openCardSheet} onOpenChange={()=>{
            setOpenCartSheet(false);
        }}>
            <Button onClick = {()=> setOpenCartSheet(true)} variant = "outline" size = "icon">
                <ShoppingCart className='h-6 w-6'/>
                <span className='sr-only'>User Cart</span>
            </Button>
            <CartWrapper carItems={cartItems}/>
        </Sheet>
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Avatar className = "bg-black">
                    <AvatarFallback className = "bg-black text-white font-extrabold">
                        As
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side = "right" className = {"w-56"}>
                <DropdownMenuLabel>
                    Logged In as {user?.userName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick = {()=> navigate("/shop/account")}>
                    <User className = "mr-4 w-4 h-4" />
                    Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick = {HandleLogOut}>
                    <LogOutIcon className = "mr-4 w-4 h-4" />
                    LogOut
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}
const ShoppingViewHeader = () => {
    const {isAuthenticated,user} = useSelector(state => state.auth)
    console.log("user: ",user);
    return (
        <header className='sticky top-0 z-40 w-ful border-b bg-background'> 
            <div className='flex h-16 items-center justify-between px-4 md:px-16'>
                <Link className='flex items-center gap-2' to={"/shop/home"}>
                    <House className='h-6 w-6'/>
                    <span className='font-bold'>ECommerce</span>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant = "outline" size = "icon" className = "lg:hidden">
                            <span className='sr-only'>Menu</span>
                            <Blinds className='h-6 w-6'/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side = "left" className = "w-full max-w-xs">
                        <MenuItems/>
                        {isAuthenticated && (
                            <div className='lg:hidden block'>
                                <HeaderRightContent user={user}/>
                            </div>
                        )}
                    </SheetContent>
                </Sheet>
                <div className='hidden lg:block'>
                    <MenuItems/>
                </div>
                {isAuthenticated && (
                    <div className='lg:block hidden'>
                        <HeaderRightContent user={user}/>
                    </div>
                )}
            </div>
        </header>
    )
}

export default ShoppingViewHeader
