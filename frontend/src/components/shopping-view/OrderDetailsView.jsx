import React, { useState } from 'react'
import { DialogContent } from '../ui/dialog'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import CommonForm from '../common/form'
const initialFormData = {
	status:'',
}
const OrderDetailsView = () => {
	const [formData,setFormData] = useState(initialFormData);
	const handleSubmitStatus = (e)=>{
		e.preventDefault();
        console.log(formData)
	}
	return (
		<DialogContent className = "sm:max-w-[600px]">
			<div className='grid gap-6'>
				<div className='grid gap-6'>
					<div className='flex mt-6 items-center justify-between'>
						<p className='font-medium'>Order Id</p>
						<Label>123456</Label>
					</div>
					<div className='flex mt-2 items-center justify-between'>
						<p className='font-medium'>Order Date</p>
						<Label>24/12/2024</Label>
					</div>
					<div className='flex mt-2 items-center justify-between'>
						<p className='font-medium'>Order Status</p>
						<Label>In Process</Label>
					</div>
					<div className='flex mt-2 items-center justify-between'>
						<p className='font-medium'>Order Amount</p>
						<Label>₹ 1000</Label>
					</div>
				</div>
				<Separator/>
				<div className='grid gap-4'>
					<div className='grid gap-2'>
						<div className='font-medium'>Order Details</div>
						<ul className='grid gap-3'>
							<li className='flex items-center justify-between'>
								<span>Product 1</span>
								<span>Price: ₹ 500</span>
							</li>
						</ul>
					</div>
				</div>
				<Separator/>
				<div className='grid gap-4'>
					<div className='grid gap-2'>
						<div className='font-medium'>Shipping Info</div>
						<ul className='grid gap-0.5'>
							<span>Abhishek sinha</span>
							<span>City</span>
							<span>Pin Code</span>
							<span>Phone</span>
							<span>notes</span>
						</ul>
					</div>
				</div>
			</div>
		</DialogContent>
	)
}

export default OrderDetailsView