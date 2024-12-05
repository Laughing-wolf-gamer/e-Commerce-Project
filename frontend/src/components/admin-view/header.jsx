import React from 'react'
import { Button } from '../ui/button'
import { LogOut, SquareMenu } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/store/auth-slice'

const AdminHeaderLayout = ({setOpen}) => {
    const dispatch = useDispatch();
    const HandleLogOut = async (e)=>{
        e.preventDefault();
        dispatch(logoutUser())
    }
	return (
		<header className='flex items-center justify-between px-4 bg-background border-b-2'>
            <Button className = "lg:hidden sm:block" onClick = {()=> setOpen(true)}>
                <SquareMenu />
                <span className='sr-only'>Toggle Menu</span>
            </Button>
            <div className='flex flex-1 justify-end'>
                <Button onClick = {HandleLogOut} className = "inline-flex items-center px-4 rounded-md font-medium shadow">
                    <LogOut />
                    Logout
                </Button>
            </div>
        </header>
	)
}

export default AdminHeaderLayout