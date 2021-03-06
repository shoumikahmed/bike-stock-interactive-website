import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../../Hooks/useInventory';
import Inventory from '../Inventory/Inventory'
import './Inventories.css'

const Inventories = () => {
    const [review, setReview] = useReview([])
    return (
        <div className='container'>
            <div className="row">
                <h1 className='inventories-title text-warning mb-5 mt-5'><strong>Inventory</strong></h1>
                <div className='inventories-container'>
                    {
                        review.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>
            <div className='text-center mb-5 mt-2'>
                <Link to="/manageinventories">
                    <button className='btn btn-warning'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventories;