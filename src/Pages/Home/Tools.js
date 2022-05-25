import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tools',{
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
        <div className=''>
            <h1 className='text-5xl text-center mt-12 md:mt-24 md:mb-12 mb-12'>Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border gap-x-1.5 justify-center gap-y-5 p-5 mx-auto container'>
            {
                tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;