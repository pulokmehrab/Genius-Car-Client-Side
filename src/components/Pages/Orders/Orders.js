
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
    
  
    return (
        <div>
           <div className="overflow-x-auto bg-secondary p-12">
            <span className='text-4xl'> Orders of <span className='text-5xl text-warning m-2'>{user?.email}</span></span>
  <table className="table w-full mt-6">
    
    <thead >
      <tr>
        <th>Name</th>
        <th>prices</th>
        <th>phone</th>
        <th>Cncel Order</th>
      </tr>
    </thead>
    <tbody>
      
      {
      order.map( ord=> <OrderRow
      key={ord._id}
      ord ={ord}>

      </OrderRow>)
      }
      
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;