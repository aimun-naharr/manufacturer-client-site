import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-[60px] gap-x-5'>
            <div className='bg-base-100'>
                <h1 className='text-xl font-bold text center'>How will you improve the performance of a React Application?</h1>
                <p>By using immutable data structure. Dependency optimization also can improve the performance of a react application. By avoiding inline function definition in the render function. Throttling and debouncing event action in javascript. Avoid using index as a key for map</p>
            </div>
            <div className='bg-base-100'>
                <h1 className='text-xl font-bold text center'>What are the different ways to manage a state in a React application?</h1>
                <p>There are four main types of states in react. This are local state, global state, server state, url state.Local storage can use in one or another component. We can create customize hooks by using useState in localState. Global state can use across in many components.Server state is to fetch data from and external server. Url that includes data is managed by urlState.</p>
            </div>
            <div className='bg-base-100'>
                <h1 className='text-xl font-bold text center'>How does prototypical inheritance work?</h1>
                <p>The protypical inheritance is a javascript feature which adds properties and methods in a object. There is also a hidden property known prototype. This feauture is basically used for inherit properties and between two objects.</p>
            </div>
            <div className='bg-base-100'>
                <h1 className='text-xl font-bold text center'>Why you do not set the state directly in React?</h1>
                <p>If we set the state directly it can replace the update we made. And it can not change the state immediately. Then it creates a pending state and when the method calls it returns a present value. We can lose control of state in all components</p>
            </div>
            <div className='bg-base-100'>
                <h1 className='text-xl font-bold text center'>What is a unit test?</h1>
                <p>Unit test is a kind of software testing by developers. It is used to check every component, method, object etc are correct or not. It is also used to see whether each unit of the software code performs well or not. It can invidually divided in small components to check the codes correct or not</p>
            </div>
            
        </div>
    );
};

export default Blogs;