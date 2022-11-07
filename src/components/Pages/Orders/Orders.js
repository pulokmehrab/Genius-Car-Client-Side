
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow/OrderRow';

const Orders = () => {
    const {user}=useContext(AuthContext);
      const [order,setOrder] =useState([])   
 console.log(order)
  

     useEffect(()=>{
     fetch(`http://localhost:5000/orders?email=${user?.email}`)
     .then(res=>res.json())
     .then(data=> setOrder(data))
     },[user?.email])
     const handleDelete = id=>{
        const proceed =window.confirm(' are sure you want to delete this Item')
       if(proceed){
        fetch(`http://localhost:5000/orders/${id}`,{
           
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully');
              const remaining =order.filter(o=>o._id !== id);
              setOrder(remaining);
            }
        })

       }   
    }
    const handleUpdate =id =>{
    fetch(`http://localhost:5000/orders/${id}` ,{
        method: "PATCH",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'Apprroved'})
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
           const remaining =order.filter(ord=>ord._id !==id);
           const approving =order.find(ord=>ord._id===id);
           approving.status ='Approved';
           const newOrders =[approving, ...remaining];
           setOrder(newOrders);
        }

    })

    }
    
  
    return (
        <div>
          <div className="overflow-x-auto w-full p-12 text-secondary bg-accent ">
  <table className="table w-full">
    
    <thead  className='w-full'>
      {/* <tr>
      
        <th>Name</th>
        <th>service name</th>
        <th>phone</th>
        <th></th>
      </tr> */}
    </thead>
    <tbody className=' '>
    {
      order.map( ord=> <OrderRow
      key={ord._id}
      ord ={ord}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}>

      </OrderRow>)
      }

    </tbody>
    </table>

        </div>
        </div>
       
    );
};

export default Orders;

 