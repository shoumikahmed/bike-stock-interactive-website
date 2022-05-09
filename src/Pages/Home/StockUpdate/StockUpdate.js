import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StockUpdate = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { name, img, price, quantity, suppliername, description } = item
    useEffect(() => {
        const url = `https://boiling-badlands-76374.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [])


    const handleDelevired = (e) => {
        e.preventDefault()
        if (quantity >= 1) {
            const newQuentity = parseInt(quantity - 1)
            const item = { name, img, price, quantity: newQuentity, suppliername, description }
            setItem(item)
            const url = `https://boiling-badlands-76374.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast('Delevery done.')
                    e.target.reset()
                })
        }
        else {
            toast('Sold Out')
        }

    }

    const handlerRestocked = (e) => {
        e.preventDefault()
        const restokte = e.target.quantity.value
        const newQuentity = parseInt(quantity) + parseInt(restokte)
        const item = { name, img, price, quantity: newQuentity, suppliername, description }
        setItem(item)
        const url = `https://boiling-badlands-76374.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Item Added')
                e.target.reset()
            })

    }


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="w-25 border mx-auto mt-5">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>price: {price}</p>
                    <p>quantity: {quantity}</p>
                    <p>id: {id}</p>
                    <p>suppliername: {suppliername}</p>
                    <p>description: {description}</p>
                    <button onClick={handleDelevired} className='btn btn-warning'>Delivered</button>
                </div>
            </div>

            <div className='text-center mt-5 mb-3'>
                <form onSubmit={handlerRestocked}>
                    <input type="number" name="quantity" id="" placeholder='quantity' />
                    <br />
                    <button className='btn btn-warning mt-3'>Add Item</button>
                </form>
            </div>

        </div>
    );
};

export default StockUpdate;