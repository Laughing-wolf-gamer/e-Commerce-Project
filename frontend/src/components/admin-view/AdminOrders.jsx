import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog } from '../ui/dialog'
import AdminOrdersDetailsView from './AdminOrdersDetailsView'

const AdminOrderLayout = () => {
    const [openDetailsDialogue, setOpenDetailsDialogue] = useState(false);
	return (
		<Card>
            <CardHeader>
                <CardTitle>All Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order Id</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Order Status</TableHead>
                            <TableHead>Order Price</TableHead>
                        </TableRow>
                        <TableHead>
                            <span className='sr-only'>Details</span>
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>123457</TableCell>
                            <TableCell>24/12/2024</TableCell>
                            <TableCell>In Process</TableCell>
                            <TableCell>₹ 1000</TableCell>
                            <TableCell>
                                <Dialog open = {openDetailsDialogue} onOpenChange={setOpenDetailsDialogue}>
                                    <Button onClick = {()=> setOpenDetailsDialogue(true)} className='btn btn-primary'>View Details</Button>
                                    <AdminOrdersDetailsView/>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
      </Card>
	)
}

export default AdminOrderLayout