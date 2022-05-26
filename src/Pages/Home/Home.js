import React from 'react';
import Banner from './Banner';
import BestProduct from './BestProduct';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Preview from './Preview';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Preview></Preview>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <BestProduct></BestProduct>
            <Review></Review>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;