import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero my-30 min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='w-1/2 relative'>
   <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl "/>
   <img src={parts}  className="absolute right-5 top-2/4 w-3/5 border-8 rounded-lg shadow-2xl "/>

   </div>
    <div className='w-1/2'>
      <h1 className="text-5xl text-warning font-bold mb-8">About Us</h1>
      <h2 className="text-5xl font-bold my-5">We are qualified & of experience in this field</h2>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;