import React, { useRef } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label';
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';

const ImageUpload = ({file,setFile,uploadedImageUrl,setUploadedImageUrl}) => {
	const inputRef = useRef(null);
	
    const handleImageFileChange = (e) => {
		e.preventDefault();
		const selectedFile = e.target.files?.[0];
		console.log("selected File: " + selectedFile)
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
	return (
		<div className='w-full max-w-md mx-auto mt-4'>
			<label className='text-lg font-semibold mb-2 '>Upload Image</label>
			<div onDragOver={handleDragOver} onDrop={handleDrop} className='border-2 border-dashed font-bold'>
				<Input id = "image-upload" type = "file" className = "hidden" ref={inputRef} onChange = {handleImageFileChange}/>
				{
					!file ? <Label htmlFor = "image-upload" className = {"flex flex-col justify-center items-center h-32 cursor-pointer"}>
						<UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2'/>
						<span className='text-sm text-muted-foreground'>Drag & drop or Click an Image to Upload</span>
					</Label>:<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<FileIcon className='w-10 h-10 text-muted'/>
						</div>
						<p className='text-sm font-medium'>{file?.name}</p>
						<Button variant = "ghost" size = "icon" className = "hover:text-foreground" onClick = {handleRemoveImage}>
							<XIcon className='w-4 h-4'/>
							<span className='sr-only'>Remove File</span>
						</Button>
					</div>
				}
			</div>
		</div>
	)
}

export default ImageUpload