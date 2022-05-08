import React from 'react';
import './AddItem.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const addItem = e => {
        e.preventDefault()
        const item = {
            email: user?.email,
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            quantity: e.target.quantity.value,
            suppliername: e.target.suppliername.value,
            img: e.target.img.value
        }
    }
    return (
        <section className='Add-item'>
            <h2 className='title'>Add Item</h2>
            <div className='container'>
                <form onSubmit={addItem} className="additem-form row">
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="name" id="name" placeholder='Item name' />
                        <label htmlFor="name" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="number" className='input-text' name="price" id="price" placeholder='Price' />
                        <label htmlFor="price" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="number" className='input-text' name="quantity" id="quantity" placeholder='Quantiy' />
                        <label htmlFor="quantity" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="suppliername" id="supplier name" placeholder='Supplier Name' />
                        <label htmlFor="supplier name" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="email" className='input-text' name="email" id="email" placeholder='Email' />
                        <label htmlFor="email" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="img" id="image url" placeholder='Image Url' />
                        <label htmlFor="image url" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="description" id="description" placeholder='Description' />
                        <label htmlFor="description" className='label'></label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="submit" className='submit-btn' value="ADD NOW" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddItem;