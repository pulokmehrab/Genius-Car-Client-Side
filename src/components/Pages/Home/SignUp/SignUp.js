
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import img from '../../../../assets/images/login/login.svg'
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = event =>{
       
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password =form.password.value;
        const name =form.name.value;
        createUser(email,password,name)
        .then(result =>{
    const user =result.user;
    console.log(user);
        })

        
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200 w-full my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left gap-10">
      <img className='w-3/4' src={img}></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-orange-600 text-center">Sign Up!</h1>

      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Sign Up" /> 
          

        </div>
      </form>
      <p className='text-center mb-10'>Already have an Account? <Link className='  text-orange-600' to="/login"> Go To Login!!</Link> </p>

    </div>
  </div>
</div>


        </div>
    );
};

export default SignUp;