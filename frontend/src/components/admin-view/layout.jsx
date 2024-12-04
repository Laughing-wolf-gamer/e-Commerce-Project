import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebarLayout from './sidebar'
import AdminHeaderLayout from './header'

const AdminViewLayout = () => {
    const[sheetOpen,setOpen] = useState(false);
	return (
		<div className='flex min-h-screen w-full'>
			<AdminSidebarLayout setOpen={setOpen} sheetOpen={sheetOpen}/>
			<div className='flex flex-1 flex-col'>
				<AdminHeaderLayout setOpen={setOpen}/>
				<main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
					<Outlet/>
				</main>
            </div>
		</div>
	)
}

export default AdminViewLayout