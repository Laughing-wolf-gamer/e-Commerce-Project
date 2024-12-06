import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import CommonForm from '../common/form'
import { addressFormControls } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { addAddresses, deleteAddress, editAddress, fetchAddresses } from '@/store/shop/address-slice'
import { useToast } from '@/hooks/use-toast'
import AddressCard from './AddressCard'
const initialData ={
    address:'',
    city:'',
    state:'',
    pinCode:'',
    country:'',
    phoneNumber:'',
    notes:'',
}
const Address = () => {
    const [formData,setFormData] = useState(initialData)
    const {addresses} = useSelector(state => state.shopAddress)
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const{toast} = useToast();
    const [currentEditedId,setCurrentEditedId] = useState('');

    const HandleManageAddress = async(e)=>{
        e.preventDefault()
        try {
            if(currentEditedId !== ''){
                
                formData.userId = user.id
                const response = await dispatch(editAddress({userId:user.id,addressId:currentEditedId,formData}))
                console.log(response);
                if(response.payload?.Success){
                    toast({
                        title: "Address Updated Successfully",
                        description: response?.payload?.message,
                    })
                    await dispatch(fetchAddresses({userId:user.id}))
                    setFormData(initialData)
                    setCurrentEditedId('');
                }
            }else{
                const response = await dispatch(addAddresses({...formData,userId:user.id}))
                if(response.payload?.Success){
                    toast({
                        title: "Address Added Successfully",
                        description: response?.payload?.message,
                    })
                    await dispatch(fetchAddresses({userId:user.id}))
                    setFormData(initialData)
                }
            }
        } catch (error) {
            console.error(`Failed to Get Manage Address`)
        }
        
    }
    useEffect(()=>{
        dispatch(fetchAddresses({userId:user.id}))
    },[dispatch])
    const isFormValid = ()=>{
        return Object.values(formData).every(value => value !== "");
    }
    const handleDeleteAddress = async(addressId)=>{
        try {
            const response = await dispatch(deleteAddress({userId:user.id,addressId}))
            if(response.payload?.Success){
                toast({
                    title: "Address Deleted Successfully",
                    description: response?.payload?.message,
                })
                await dispatch(fetchAddresses({userId:user.id}))
            }
        } catch (error) {
            console.error(`Failed to Delete Address`)
        }
    }
    const handleEditAddress = (addressInfo)=>{
        setCurrentEditedId(addressInfo?._id);
        setFormData({...formData,
            address:addressInfo?.address,
            city:addressInfo?.city,
            state:addressInfo?.state,
            pinCode:addressInfo?.pinCode,
            country:addressInfo?.country,
            phoneNumber:addressInfo?.phoneNumber,
            notes:addressInfo?.notes,
        });
    }
    return (
        <Card className>
            <div className='mb-5 p-3 grid grid-cols-1 sm:grid-cols-2  gap-2'>
                {
                    addresses && addresses.length > 0 && addresses.map((address,i)=>(
                        <AddressCard key={i} 
                        addressInfo={address} 
                        handleDeleteAddress={handleDeleteAddress}
                        handleEditAddress={handleEditAddress}
                        />
                    ))
                }
            </div>
            <CardHeader>
                <CardTitle>
                    {currentEditedId ? "Edit Address" : "Add New Address"}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <CommonForm 
                    formControls={addressFormControls}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={currentEditedId ? "Edit" : "Add"}
                    onSubmit={HandleManageAddress}
                    isBtnValid={isFormValid()}
                />
            </CardContent>
        </Card>
    )
}

export default Address
