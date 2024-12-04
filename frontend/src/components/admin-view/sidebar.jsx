import { adminSideBarMenu } from '@/config'
import { ChartArea, Feather, LayoutDashboard, ListOrdered, ShoppingCart } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
const GetAdminSideBarMenuIcon = ({id})=>{
    switch(id){            
        case "products":
            return <ShoppingCart size={24} />
        case "features":
            return <Feather size = {24}/>
        case "orders":
            return <ListOrdered size={24} />
        default:
            return <LayoutDashboard size={24} />
            
    }
}
const MenuItems = ({setOpen})=>{
    const navigate = useNavigate();
    return (
        <nav className='mt-8 flex flex-col gap-2'>
            {
                adminSideBarMenu.map((item) => (
                        <div key={item.id} className='flex cursor-pointer hover:bg-muted hover:text-foreground items-center gap-2 rounded-md py-2' itemType='button' onClick={()=> {
                            navigate(item?.path);
                            setOpen ? setOpen(false) : null
                        }}>
                            <GetAdminSideBarMenuIcon id={item.id}/>
                            <span>{item.label}</span>
                        </div>
                    )
                )
            }
        </nav>
        
    )
}
const AdminSidebarLayout = ({sheetOpen,setOpen}) => {
    const navigate = useNavigate();
	return (
		<Fragment>
            <Sheet open = {sheetOpen} onOpenChange={setOpen} >
                <SheetContent side = 'left' className = "w-64">
                    <div className='flex flex-col h-full'>
                        <SheetHeader className={"border-b"}>
                            <SheetTitle className = "border-b">
                                <ChartArea size={30}/>
                                <h1 className='text-xl font-extrabold mt-5 mb-3' >
                                    Admin Panel
                                </h1>
                            </SheetTitle>
                        </SheetHeader>
                        <MenuItems setOpen = {setOpen}/>
                    </div>
                </SheetContent>
            </Sheet>
            <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
                <div onClick={()=> navigate("/admin/dashboard")} className='flex cursor-pointer items-center gap-2'>
                    <ChartArea size={30}/>
                    <h1 className='text-xl font-extrabold mt-5 mb-3' >
                        Admin Panel
                    </h1>
                </div>
                <MenuItems/>
            </aside>
        </Fragment>
	)
}

export default AdminSidebarLayout