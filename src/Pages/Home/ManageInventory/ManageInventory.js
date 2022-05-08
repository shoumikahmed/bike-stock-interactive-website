import React from 'react';
import './ManageInventory.css'

const ManageInventory = ({ manageinventory }) => {
    const { name, img, description, price, quantity, suppliername } = manageinventory
    return (
        <div className='wrapper container pb-5'>
            <div className="card-box">
                <img className='' src={img} alt="" />
                <div className="info">
                    <h5 className=' text-warning'>{name}</h5>
                    <p className='m-0 mt-2 text-warning'><strong>Price: ${price}</strong></p>
                    <p className='m-0 mb-2'><small>{description}</small></p>
                    <p className='m-0 mb-2'><strong>Suppliername:</strong> {suppliername}</p>
                    <p className='m-0 mb-2'><strong>Quantity:</strong> {quantity}</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <button className='button'>Stock Update</button>
                        </div>
                        <div>
                            <button className='button'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;