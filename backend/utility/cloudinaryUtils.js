import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';

const CLOUDINARY_CLOUD_NAME = "dwzh2ct6y"
const CLOUDINARY_API_KEY = "756457721714874"
const CLOUDINARY_API_SECRET = "gBOw2rJkiFvv_KHgyc7L0-4fa8U"

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});
const storage = new multer.memoryStorage();

async function handleImageUpload(file){
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(file, {
            resource_type: 'auto', // Automatically detect the resource type (image/video)
        });
        return result; // Return the result which contains the image URL, public_id, etc.
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Cloudinary upload failed');
    }
}

const upload = multer({storage});
export {handleImageUpload,upload};