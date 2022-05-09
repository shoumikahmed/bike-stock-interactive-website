import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';
import useReview from '../../../Hooks/useInventory';
import './ManageInventories.css'
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const [review, setReview] = useReview([])
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/stockupdate/${id}`)
    }

    const handleDelete = (id) => {
        const prceed = window.confirm('Are you sure to delete this item?')
        if (prceed) {
            const url = `https://boiling-badlands-76374.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = review.filter(manageinventory => manageinventory?._id !== id)
                    setReview(remaining)
                })

        }

    }


    return (
        <div className='container'>
            <div className="row">
                <h1 className='manageinventories-title text-warning mb-5 mt-5'><strong>Inventory</strong></h1>
                <div className='manageinventories-container'>
                    {
                        review.map(manageinventory => <div
                            key={manageinventory._id}
                        >
                            <div className='wrapper container pb-5'>
                                <div className="card-box">
                                    <img className='' src={manageinventory?.img} alt="" />
                                    <div className="info">
                                        <h5 className=' text-warning'>{manageinventory?.name}</h5>
                                        <p className='m-0 mt-2 text-warning'><strong>Price: ${manageinventory?.price}</strong></p>
                                        <p className='m-0 mb-2'><small>{manageinventory?.description}</small></p>
                                        <p className='m-0 mb-2'><strong>Suppliername:</strong> {manageinventory?.suppliername}</p>
                                        <p className='m-0 mb-2'><strong>Quantity:</strong> {manageinventory?.quantity}</p>

                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <button onClick={() => navigateToServiceDetail(manageinventory?._id)} className='button'>Stock Update</button>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDelete(manageinventory?._id)} className='button'>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;