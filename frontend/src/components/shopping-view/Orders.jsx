import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import OrderDetailsView from './OrderDetailsView'

const Orders = () => {
    const [openDetailsDialogue, setOpenDetailsDialogue] = useState(false);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
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
                                    <Button onClick = {()=> setOpenDetailsDialogue(true)}  className='btn btn-primary'>View Details</Button>
                                    <OrderDetailsView/>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default Orders