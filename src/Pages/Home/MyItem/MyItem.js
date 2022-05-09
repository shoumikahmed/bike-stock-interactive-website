import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItem, setMyItem] = useState()
    useEffect(() => {
        const email = user?.email
        fetch(`https://boiling-badlands-76374.herokuapp.com/myitem?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyItem(data)
            })
    }, [])
    return (
        <div>
            <h1>My Item: {myItem?.length}</h1>
            {
                myItem?.map(item => <div
                    className='border'
                    key={item?._id}
                >
                    <h1>Name: {item?.name}</h1>
                    <h5>Email: {item?.email}</h5>
                    <p>Price: {item?.price}</p>
                    <p>Supplier name: {item?.suppliername}</p>
                </div>)
            }
        </div>
    );
};

export default MyItem;