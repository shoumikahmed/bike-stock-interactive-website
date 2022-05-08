import React from 'react';
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
        </div>
    );
};

export default Home;