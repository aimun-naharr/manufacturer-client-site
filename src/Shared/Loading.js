import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-full my-auto'>
            <progress class="progress w-56 mx-auto text-center items-center"></progress>
        </div>
    );
};

export default Loading;