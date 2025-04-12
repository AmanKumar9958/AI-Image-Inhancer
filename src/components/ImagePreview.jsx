import React from 'react'
import Loader from './Loader'

const ImagePreview = (props) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4 max-w-4x mt-7 rounded-xl shadow-lg'>
            {/* old image */}
            <div className='p-3 overflow-hidden rounded-xl shadow-lg'>
                <h1 className='text-xl font-semibold text-center bg-blue-900 p-2 rounded-xl'>Original Image</h1>
                {props.uploaded ? (
                    <img src={props.uploaded} alt="Original_Image" className='w-full h-96 object-cover mt-5 text-center' />
                ) : (
                    <div className='text-center text-gray-500 mt-2 flex justify-center items-center'>
                        NO Image Selected
                    </div>
                )}                
            </div>

            {/* enhanced image */}
            <div className='p-3 overflow-hidden rounded-xl shadow-lg'>
                <h1 className='text-xl font-semibold text-center bg-blue-600 p-2 rounded-xl'>Enhanced Image</h1>
                
                {props.enhanced && !props.loading && (
                    <img src={props.enhanced} alt="Enhanced Image" className='w-full h-96 object-cover mt-5 text-center' />
                )}

                {props.loading ? <Loader /> : (
                    <div className='text-center text-gray-500 mt-2'>
                        NO Enhanced Image
                    </div>
                )}

            </div>
        </div>
    )
}

export default ImagePreview