import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
    const loading = true;
    const color = "#ffffff";

    return (
        <div className="sweet-loading flex flex-col justify-center items-center mt-10 h-full">
            <ClipLoader
                color={color}
                loading={loading}
                size={90}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;
