import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/stockupdate/${id}`)
    }
    const { name, img, description, price, quantity, suppliername } = inventory
    return (
        <div className='wrapper container pb-5'>
            <div className="card-box">
                <img className='' src={img} alt="" />
                <div className="info">
                    <h5 className='text-warning'>{name}</h5>
                    <p className='m-0 mt-2 text-warning'><strong>Price: ${price}</strong></p>
                    <p className='m-0 mb-2'><small>{description}</small></p>
                    <p className='m-0 mb-2'><strong>Suppliername:</strong> {suppliername}</p>
                    <p className='m-0 mb-2'><strong>Quantity:</strong> {quantity}</p>

                    <button onClick={() => navigateToServiceDetail(inventory?._id)} className='button'>Stock Update</button>

                </div>
            </div>
        </div>
    );
};

export default Inventory;