import ImageUpload from '@/components/admin-view/image-upload';
import AdminProductTile from '@/components/admin-view/product-tile';
import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductsFromElement } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewProduct, delProducts, editProducts, fetchAllProducts } from '@/store/admin/product-slice';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


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
    const[imageLoading,setImageLoading] = useState(false);
    const {products} = useSelector(state => state.adminProducts);
    const [currentEditingId,setCurrentEditingId] = useState(null);



    const {toast} = useToast();
    const dispatch = useDispatch();

    const handleDeleteProducts = async (productId)=>{
        try {
            const data = await dispatch(delProducts(productId));
            if(data?.payload?.Success){
                toast({
                    title: "Product Deleted Successfully",
                    description: data?.payload?.message,
                });
                dispatch(fetchAllProducts());
            }
        } catch (error) {
            console.error(`Failed to delete ${productId} `,error);
        }
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        if(currentEditingId){
            try {
                const data = await dispatch(editProducts({id:currentEditingId,formData}))
                if(data?.payload?.Success){
                    setOpenCreateProduct(false);
                    setImageFile(null);
                    setFormData(initialFormData);
                    setCurrentEditingId(null);
                    dispatch(fetchAllProducts());
                    toast({
                        title: "Product Updated Successfully",
                        description: data?.payload?.message,
                    });
                }
            } catch (error) {
                console.error(`Failed to Update Product: ${error.message}`);
            }
        }else{
            try {
                console.log("product: ",formData);
                const data = await dispatch(addNewProduct({...formData,image:uploadedImageUrl}))
                if(data?.payload?.Success){
                    setOpenCreateProduct(false);
                    setImageFile(null);
                    setFormData(initialFormData);
                    dispatch(fetchAllProducts());
                    toast({
                        title: "Product Added Successfully",
                        description: data?.payload?.message,
                    });
                }
            } catch (error) {
                console.error(`Failed to Add New Product: ${error.message}`);
            }
        }
    }


    function isFormValid (){
        console.log(formData);
        return Object.keys(formData).map((key) => formData[key] !== "").every((item) => item)
    }
    useEffect(()=>{
        dispatch(fetchAllProducts());
    },[dispatch])
    console.log("Products: ",products);
    
    return (
        <Fragment>
            <div className='mb-5 flex justify-end'>
                <Button
                    onClick={() =>setOpenCreateProduct(true)}
                >Add New Product</Button>
            </div>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {/* Product cards */}
                {
                    products && products.length > 0 ? products.map((product,i) =>(
                        <AdminProductTile key={i} product={product} setCurrentEditingId = {setCurrentEditingId} setOpenCreateProduct = {setOpenCreateProduct} setFormData = {setFormData} deleteProduct = {handleDeleteProducts}/>
                    )):null
                }
            </div>
            <Sheet open = {openCreateProduct} onOpenChange={()=>{
                setOpenCreateProduct(!openCreateProduct);
                setImageFile(null);
                setFormData(initialFormData);
                setCurrentEditingId(null);
            }} >
            <SheetContent side = "right" className = "overflow-auto">
                <SheetHeader>
                    <SheetTitle>
                        {!currentEditingId ? "Add New Products":"Edit Products"}
                    </SheetTitle>
                </SheetHeader>
                <ImageUpload 
                    file = {imageFile} 
                    setFile = {setImageFile} 
                    uploadedImageUrl = {uploadedImageUrl} 
                    setUploadedImageUrl = {setUploadedImageUrl} 
                    imageLoading={imageLoading} 
                    setImageLoading={setImageLoading}
                    isEditingMode = {currentEditingId !== null}
                />
                <div className='py-6'>
                    <CommonForm 
                        formControls={addProductsFromElement} 
                        buttonText={!currentEditingId ? "Add":"Edit"} 
                        formData={formData} 
                        setFormData={setFormData} 
                        onSubmit={onSubmit}
                        isBtnValid = {true}
                    />
                </div>
            </SheetContent>
            </Sheet>
        </Fragment>
    )
}

export default AdminProducts