import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory'
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className='inventories-title text-warning mb-5 mt-5'><strong>Inventory</strong></h1>
                <div className='inventories-container'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>
            <div className='text-center mb-5 mt-2'>
                <Link to="manageinventories">
                    <button className='btn btn-warning'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventories;