import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import enhancedImageHandler from '../services/api'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const uploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);

        try{
            const enhancedImageURL = await enhancedImageHandler(file);
            setEnhancedImage(enhancedImageURL);
            setLoading(false);
        } catch (error) {
            console.error("Error enhancing image:", error);
            setLoading(false);
            alert("Error enhancing image. Please try again.");
        }
    }
    
    return (
        <div>
            <ImageUpload uploadImageHandler={uploadImageHandler}/>
            <ImagePreview
                loading={loading} 
                uploaded={uploadImage} 
                enhanced={enhancedImage}
            />
        </div>
    )
}

export default Home