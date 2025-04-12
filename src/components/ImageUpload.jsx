import React from 'react'

const ImageUpload = (props) => {
    const showImageHandler = (e) => {
        const file = e.target.files[0];
        if(file){
            props.uploadImageHandler(file);
        }
    }

    return (
        <div className='flex justify-center bg-gray-100 text-black mt-[25vh] md:mt[5vh] shadow-lg w-full max-w-2xl rounded-2xl p-5 hover:bg-gray-300 transition-all duration-200'>
            <label htmlFor="fileInput" className='block w-full font-bold rounded-2xl text-center cursor-pointer  border-2 border-dashed border-gray-400 p-3'>
                <input type="file" id="fileInput" className= "hidden"  onChange={showImageHandler}/>
                <p>Click to open or drag you file here..</p>
            </label>
        </div>
    )
}

export default ImageUpload