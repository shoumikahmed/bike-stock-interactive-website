import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import StockDetail from '../StockDetail/StockDetail';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='section-container'>
                <Inventories></Inventories>
            </div>
            <StockDetail></StockDetail>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;