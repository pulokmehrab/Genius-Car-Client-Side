import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
 const {img,price,title,_id} = service
    return (
        <div className='mt-4'>
            <div className="card w-96 glass ">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price: {price}$</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`} className="btn btn-primary">CheckOut!</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;