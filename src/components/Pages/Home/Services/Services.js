
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services ,setServices] =useState([]);
  useEffect (()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data =>setServices(data))
  },[])

    return (
        <div className='mt-20 card-body items-center text-center'>
            <div>
            <p className=' mx-10 text-2xl font-bold text-orange-600' > Services</p>
            <h2 className='mx-12 text-5xl font-semibold text-warning'>Our Services</h2>
            <p className=' mx-10 text-2xl font-bold text-orange-600'>24/7 at your services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid  gap-6'>
                
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
                
                
            </div>
            <button className="btn btn-outline btn-warning mt-10">Watch More</button>

        </div>
    );
};

export default Services;