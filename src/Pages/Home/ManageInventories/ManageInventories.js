import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css'

const ManageInventories = () => {
    const [manageInventories, setmanageInventories] = useState([])
    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setmanageInventories(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className='manageinventories-title text-warning mb-5 mt-5'><strong>Inventory</strong></h1>
                <div className='manageinventories-container'>
                    {
                        manageInventories.map(manageinventory => <ManageInventory
                            key={manageinventory.id}
                            manageinventory={manageinventory}
                        ></ManageInventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;