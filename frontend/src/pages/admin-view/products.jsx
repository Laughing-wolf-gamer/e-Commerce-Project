import ImageUpload from '@/components/admin-view/image-upload';
import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductsFromElement } from '@/config';
import React, { Fragment, useState } from 'react'


const initialFormData = {
  title:'',
  description: '',
  salePrice:'',
  brand:'',
  price: '',
  Category:'',
  quantity: '',
  totalStock:'',
  image:null,
}

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formData,setFormData] = useState(initialFormData)
  const [imageFile,setImageFile] = useState(null);
  const [uploadedImageUrl,setUploadedImageUrl] = useState('');
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log("product",formData)
  }

  return (
    <Fragment>
      <div className='mb-5 flex justify-end'>
          <Button
            onClick={() =>setOpenCreateProduct(true)}
          >Add New Product</Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {/* Product cards */}
        <Sheet open = {openCreateProduct} onOpenChange={setOpenCreateProduct} >
          <SheetContent side = "right" className = "overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Products</SheetTitle>
            </SheetHeader>
            <ImageUpload file = {imageFile} setFile = {setImageFile} uploadedImageUrl = {uploadedImageUrl} setUploadedImageUrl = {setUploadedImageUrl}/>
            <div className='py-6'>
                <CommonForm 
                formControls={addProductsFromElement} 
                buttonText={"Add"} 
                formData={formData} 
                setFormData={setFormData} 
                onSubmit={onSubmit}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  )
}

export default AdminProducts