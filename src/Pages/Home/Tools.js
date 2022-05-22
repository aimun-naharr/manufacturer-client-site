import React, { useEffect, useState } from 'react';

const Tools = () => {
    const [tools, setTools]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>{
            setTools(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center mt-12 md:mt-24'>Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'></div>
            {/* {
                tools.map=>(tool=>)
            } */}
        </div>
    );
};

export default Tools;