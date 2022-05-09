// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import useReview from '../../../Hooks/useInventory';
// import './ManageInventory.css'

// const ManageInventory = () => {
//     // const { name, img, description, price, quantity, suppliername } = manageinventory
//     const [review, setReview] = useReview([])
//     const navigate = useNavigate()
//     const navigateToServiceDetail = id => {
//         navigate(`/stockupdate/${id}`)
//     }
//     return (
//         <div className='wrapper container pb-5'>
//             <div className="card-box">
//                 <img className='' src={review?.img} alt="" />
//                 <div className="info">
//                     <h5 className=' text-warning'>{review?.name}</h5>
//                     <p className='m-0 mt-2 text-warning'><strong>Price: ${review?.price}</strong></p>
//                     <p className='m-0 mb-2'><small>{review?.description}</small></p>
//                     <p className='m-0 mb-2'><strong>Suppliername:</strong> {review?.suppliername}</p>
//                     <p className='m-0 mb-2'><strong>Quantity:</strong> {review?.quantity}</p>
//                     <div className='d-flex justify-content-between'>
//                         <div>
//                             <button onClick={() => navigateToServiceDetail(inventory?._id)} className='button'>Stock Update</button>
//                         </div>
//                         <div>
//                             <button className='button'>Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageInventory;