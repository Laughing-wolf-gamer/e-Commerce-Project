import React, { useEffect, useState } from 'react'
import banner1 from '../../assets/banner-1.webp';
import banner2 from '../../assets/banner-2.webp';
import banner3 from '../../assets/banner-3.webp';
import { Button } from '@/components/ui/button';
import { Apple, BabyIcon, ChevronsLeftIcon, ChevronsRightIcon, Clock2, CloudLightning, Images, ShirtIcon, Speaker, SquareChartGantt, WatchIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredShopProducts, fetchProductDetails } from '@/store/shop/product-slice';
import ShoppingViewProductTile from './ShoppingViewProductTile';
import { useNavigate } from 'react-router-dom';
import { addToCart, fetchCartItems } from '@/store/shop/car-slice';
import { useToast } from '@/hooks/use-toast';
import ProductDetailsDialogue from '@/components/shopping-view/ProductDetails';
const ShoppingHome = () => {
    const {user} = useSelector(state => state.auth);
    const {products,ProductDetails} = useSelector(state => state.shopProductSlice)
    const navigate = useNavigate();
    const {toast} = useToast();
    const category = [
        {id:'men', label:'Men',icon:ShirtIcon},
        {id:'women', label:'Women',icon:CloudLightning},
        {id:'kids', label:'Kids',icon:BabyIcon},
        {id:'watch', label:'Watch',icon:WatchIcon},
    ]
    const brands = [
        {id:'apple', label:'Apple',icon:Apple},
        {id:'samsung', label:'Samsung',icon:BabyIcon},
        {id:'huawei', label:'Huawei',icon:WatchIcon},
        {id:'xiaomi', label:'Xiaomi',icon:Images},
        {id:'oppo', label:'Oppo',icon:CloudLightning},
        {id:'puma', label:'Puma',icon:Speaker},
        {id:'rebook', label:'Rebook',icon:Clock2},
        {id:'h&m', label:'H&M',icon:ShirtIcon},
        {id:'footwear', label:'Footwear',icon:SquareChartGantt},
    ]
    const [currentSlide,setCurrentSlide] = useState(0);
    const slides = [banner1,banner2,banner3];
    const[openDetails,setOpenDetails] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllFilteredShopProducts({filtersParams:[],sortParams:'price-low-to-high'}))
    },[])
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, [slides.length]);
    useEffect(()=>{
        if(ProductDetails){
            setOpenDetails(true);
        }
    },[ProductDetails])


    const handleGetProductDetails = (id)=>{
        console.log(id);
        dispatch(fetchProductDetails(id));
    }
    const handleAddToCart = async (productId)=>{
        const result = await dispatch(addToCart({userId:user?.id,productId:productId,quantity:1}))
        if(result?.payload?.Success){
            await dispatch(fetchCartItems({userId:user?.id}))
            toast({
                title: "Product Added to Cart Successfully",
                description: result?.payload?.message,
            });
        }
    }
    const handleNavigateToListingPage = (item,section) =>{
        sessionStorage.removeItem('filters');
        const currentFilters = {
            [section]:[item.id]
        }
        sessionStorage.setItem('filters', JSON.stringify(currentFilters));
        navigate(`/shop/listing`);
    }
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='relative w-full h-[900px] overflow-hidden'>
                {
                    slides.map((slide,index)=>(
                        <img
                            src={slide}
                            alt={index}
                            className={`${index === currentSlide ? 'opacity-100':'opacity-0'} absolute top-0 left-0 w-full h-full transition-opacity object-cover`}
                        />
                    ))
                }
                <Button onClick = {()=> setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)} variant = "outline" size = "icon" className = "absolute top-1/2 left-4 -translate-y-1/2 bg-black/80">
                    <ChevronsLeftIcon className='w-4 h-4'/>
                </Button>
                <Button onClick = {()=> setCurrentSlide(prev => (prev + 1) % slides.length)} variant = "outline" size = "icon" className = "absolute top-1/2 right-4 -translate-y-1/2 bg-white/80">
                    <ChevronsRightIcon className='w-4 h-4'/>
                </Button>
            </div>
            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Shop by Category</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        category.map((item)=>(
                            <Card onClick = {() => handleNavigateToListingPage(item,'category')} className = "cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className = "flex flex-col items-center justify-center p-6">
                                <item.icon className='w-12 h-12 mb-4 text-primary'/>
                                    <span className='font-bold'>{item.label}</span>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </section>
            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Shop by Brand</h2>
                </div>
                <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4'>
                    {
                        brands.map((item)=>(
                            <Card onClick = {() => handleNavigateToListingPage(item,'brand')} className = "cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className = "flex flex-col items-center justify-center p-6">
                                <item.icon className='w-12 h-12 mb-4 text-primary'/>
                                    <span className='font-bold'>{item.label}</span>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </section>
            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>Features Products</h2>
                </div>
                <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        products && products.length > 0 && products.slice(0,6).map((product,index)=>(
                            <ShoppingViewProductTile key={index} product={product} handleGetProductDetails={handleGetProductDetails} handleAddToCart={handleAddToCart}/>
                        ))
                    }
                </div>
            </section>
            <ProductDetailsDialogue open={openDetails} setOpen={setOpenDetails} ProductDetails={ProductDetails} handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default ShoppingHome
