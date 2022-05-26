import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools]=useState([])
    useEffect(()=>{
        fetch('https://sheltered-wildwood-63825.herokuapp.com/tools',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setTools(data)
        })
    },[])
    return (
        <div className='mb-[20px]'>
            <h1 className='text-4xl text-center mt-12 md:mt-24 md:mb-12 mb-12 uppercase font-bold'><span className='text-secondary'>To</span>ols</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-1.5 justify-center gap-y-10 md:gap-x-5 p-5 mx-auto container'>
            {
                tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;