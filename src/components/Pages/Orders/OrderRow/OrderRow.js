import React from 'react';

const OrderRow = ({ord}) => {
    const {serviceName,price,phone} =ord
    return (
       
            <tr >
        <th>{serviceName}</th>
        <td>{price}</td>
        <td>{phone}</td>
        <td>delete</td>
      </tr>
       
    );
};

export default OrderRow;