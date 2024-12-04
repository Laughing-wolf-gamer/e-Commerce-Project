import React from 'react'
import { Button } from '../ui/button'
import { LogOut, SquareMenu } from 'lucide-react'

const AdminHeaderLayout = ({setOpen}) => {
	return (
		<header className='flex items-center justify-between px-4 bg-background border-b-2'>
            <Button className = "lg:hidden sm:block" onClick = {()=> setOpen(true)}>
                <SquareMenu />
                <span className='sr-only'>Toggle Menu</span>
            </Button>
            <div className='flex flex-1 justify-end'>

                <Button className = "inline-flex items-center px-4 rounded-md font-medium shadow">
                    <LogOut />
                    Logout
                </Button>
            </div>
        </header>
	)
}

export default AdminHeaderLayout