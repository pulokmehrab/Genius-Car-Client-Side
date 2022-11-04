import React from 'react';
import './Carouseltem.css'
const CarouselItem = ({slide}) => {
    const {image,id,prev,next} =slide

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
             
        <div className='carousel-image'>    
       <img src={image} className="w-full " />
       </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0 ">
        <a href={`#slide${prev}`} className="btn btn-circle mx-3">❮</a> 
         <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 my-10 left-24  top-1/4 my-2 ">
         <h1 className=' text-6xl text-white font-bold-700'>Affordabl<br/>
          Price for Car 
          Servicing
         </h1>
        </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 m-12 left-5 top-1/2   ">
         <p className=' text-white'>
         There are many variations of passages of  available, but the majority have suffered alteration in some form
         </p>
        </div>
       <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5  left-24 top-3/4   ">
       <button className="btn btn-outline btn-accent mx-2">Button</button>
       <button className="btn btn-outline btn-warning">Warning</button>
        </div>
     </div>
    );
};

export default CarouselItem;