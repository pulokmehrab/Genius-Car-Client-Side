import React, { useEffect, useState } from 'react';

const OrderRow = ({ord ,handleDelete}) => {
    const {serviceName,price,phone,service,_id} =ord;
    const [orderservice, setOrderservice] =useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
    .then(data => setOrderservice(data));
    },[service])
   
    
    return (
       
       
       
            <div>

         
             <tr >
        
        <td className='w-full '>
          <div className="flex items-center space-x-3 ">
            <div className="avatar">
             { orderservice?.img &&
              <div className="mask mask-squircle w-12 h-12 mx-12">
              <img src={orderservice.img} alt="Avatar Tailwind CSS Component" />
            </div>

             }

            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          {price}
          <br/>
        </td>
        <td>{phone}</td>

        <td><button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-error">X</button>
</td>
        <th>
        </th>
      </tr>
            </div>
       
    );
};

export default OrderRow;