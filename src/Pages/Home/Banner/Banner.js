import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
                <h1 className='text-warning w-50 text-center'><strong>BIKE STOCKER</strong></h1>
                <p className='text-white w-75 text-center'>Our business is stocking bikes and delivering bikes.</p>
                <Link to="/inventory" className="btn btn-outline-light rounded-pill py-2 px-4">Our Inventory</Link>
            </div>
        </div>
    );
};

export default Banner;