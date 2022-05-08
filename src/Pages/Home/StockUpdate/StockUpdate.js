import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReview from '../../../Hooks/useInventory';

const StockUpdate = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { name, img, price, quantity, suppliername, description } = item
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [])
    return (
        <div>
            <div className="w-25 border mx-auto mt-5">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>price: {price}</p>
                    <p>quantity: {quantity}</p>
                    <p>suppliername: {suppliername}</p>
                    <p>description: {description}</p>
                    <button className='btn btn-warning'>Delivered</button>
                </div>
            </div>
            <div className='text-center mt-5 mb-3'>
                <input type="number" name="" id="" placeholder='quantity' />
                <br />
                <button className='btn btn-warning mt-3'>Add Item</button>
            </div>

        </div>
    );
};

export default StockUpdate;