import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const{title,_id,price} =useLoaderData();
    const{user} =useContext(AuthContext)
    const placeOrder =event=>{
event.preventDefault();
       const form =event.target;
       const name = `${form.firstname.value} ${form.lastname.value}`;
       const email =user?.email || 'Log iN fIRST';
       const phone =form.phone.value;
       const message =form.message.value;


       const order ={
        service: _id,
        serviceName: title,
        price,
        customaer: name,
        email,
        phone,
        message

       }
    // if(phone.length >10){
    //     alert('invalid phone number');
    // }

      fetch('http://localhost:5000/orders' ,{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert('order placed')
            form.reset();
        }
    })
       .catch(e =>console.error(e));
    }
    return (
        <div className='m-12 p-12  bg-accent-focus rounded'>
            <form onSubmit={placeOrder}>
                <h2 className='text-4xl'>
                    you want to service of<span className='text-warning text-6xl'> {title}</span>

                </h2>
                <span className='text-4xl'>Price : {price}$</span>

           <div className='m-12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name="firstname" type="text" placeholder="First Name" className="input input-bordered input-info w-full " />
            <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered input-info w-full" />
            <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered input-info w-full" readOnly />
            <input name="phone" type="text" placeholder="Phone" className="input input-bordered input-info w-full" required/>
            <textarea name="message" className="textarea textarea-accent h-24 w-full" placeholder="Your Meassage"></textarea>
              
           </div>
           <input type="submit" value="Place your order" className="btn m-12 glass text-neutral "></input>

            </form>

        </div>
    );
};

export default CheckOut;