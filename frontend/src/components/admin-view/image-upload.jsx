import React, { useEffect, useRef } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label';
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';
import { Skeleton } from '../ui/skeleton';

const ImageUpload = ({file,setFile,uploadedImageUrl,setUploadedImageUrl,imageLoading,setImageLoading,isEditingMode}) => {
	const inputRef = useRef(null);
    const handleImageFileChange = (e) => {
		e.preventDefault();
		console.log("selected File: ",e.target.files)
		const selectedFile = e.target.files?.[0];
		if(selectedFile) setFile(selectedFile);
	}
	const handleDragOver = (e)=>{
		e.preventDefault();
        e.stopPropagation();
	}
	const handleDrop = (e) => {
		e.preventDefault();
        e.stopPropagation();
        const selectedFile = e.dataTransfer?.files?.[0];
        if(selectedFile) setFile(selectedFile);
	}
	const handleRemoveImage = (e) => {
		e.preventDefault();
        setFile(null);
        // setUploadedImageUrl('');
		if(inputRef.current){
			inputRef.current.value = '';
		}
    }
    const handleUploadImage = async () => {
        setImageLoading(true);
        try {
            const formData = new FormData();
            formData.append('my_file', file);
            const res = await axios.post('http://localhost:5000/api/admin/upload-image',formData);
            console.log(res.data);
            if(res){
                /* setFile(null);
                inputRef.current.value = ''; */
                setUploadedImageUrl(res.data?.result);
            };
            
        } catch (error) {
            console.error('An error occurred while uploading: ',error);
        }finally{
            setImageLoading(false);
        }
        
    }
    useEffect(()=>{
        if(file){
            handleUploadImage();
        }
    },[file])
	return (
		<div className='w-full max-w-md mx-auto mt-4'>
			<label className='text-lg font-semibold mb-2 '>Upload Image</label>
			<div onDragOver={handleDragOver} onDrop={handleDrop} className={`border-2 border-dashed font-bold ${isEditingMode ? "opacity-60":''}`}>
				<Input id = "image-upload" type = "file" className = "hidden" ref={inputRef} onChange = {handleImageFileChange} disabled = {isEditingMode}/>
				{
					!file ? <Label htmlFor = "image-upload" className = {`flex flex-col justify-center items-center h-32 ${isEditingMode ? "cursor-not-allowed":'cursor-pointer'}`}>
						<UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2'/>
						<span className='text-sm text-muted-foreground'>Drag & drop or Click an Image to Upload</span>
					</Label>:(
                        imageLoading ? <Skeleton className={"bg-gray-100 h-10"}/>: (
                            <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <FileIcon className='w-10 h-10 text-muted'/>
                            </div>
                            <p className='text-sm font-medium'>{file?.name}</p>
                                <Button variant = "ghost" size = "icon" className = "hover:text-foreground" onClick = {handleRemoveImage}>
                                    <XIcon className='w-4 h-4'/>
                                    <span className='sr-only'>Remove File</span>
                                </Button>
                            </div>
                        )
                    )
				}
			</div>
		</div>
	)
}

export default ImageUpload