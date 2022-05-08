import React from 'react';
import './AddItem.css'

const AddItem = () => {
    return (
        <section className='Add-item'>
            <h2 className='title'>Add Item</h2>
            <div className='container'>
                <div className="additem-form row">
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="name" placeholder='Item name' />
                        <label htmlFor="name" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="number" className='input-text' name="" id="price" placeholder='Price' />
                        <label htmlFor="price" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="number" className='input-text' name="" id="quantity" placeholder='Quantiy' />
                        <label htmlFor="quantity" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="supplier name" placeholder='Supplier Name' />
                        <label htmlFor="supplier name" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="email" className='input-text' name="" id="email" placeholder='Email' />
                        <label htmlFor="email" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="image url" placeholder='Image Url' />
                        <label htmlFor="image url" className='label'></label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input type="text" className='input-text' name="" id="description" placeholder='Description' />
                        <label htmlFor="description" className='label'></label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="submit" className='submit-btn' value="ADD NOW" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddItem;