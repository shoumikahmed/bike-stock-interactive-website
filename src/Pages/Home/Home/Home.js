import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='section-container'>
                <Inventories></Inventories>
            </div>
        </div>
    );
};

export default Home;