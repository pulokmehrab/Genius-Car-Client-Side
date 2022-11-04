import React from 'react';

const ServiceCard = ({service}) => {
 const {img,price,title} = service
    return (
        <div className='mt-4'>
            <div className="card w-96 glass ">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price: {price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Call Now!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;