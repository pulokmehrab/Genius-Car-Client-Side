
import { GoogleAuthProvider } from 'firebase/auth';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const LogIn = () => {
    const {providerLogin ,logIn} =useContext(AuthContext);
     
    const handleSignIn = event =>{
       
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password =form.password.value;
       
        logIn(email,password)
        .then(result =>{
    const user =result.user;
    console.log(user);
    form.reset();
        })

        
    }


    const googleProvider =new GoogleAuthProvider();

    const handleLogin = ()=>{
        providerLogin(googleProvider)
        .then(result=>{
        const user =result.user
        console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
        


    }
    return (
        <div className="hero min-h-screen bg-base-200 w-full my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left gap-10">
      <img className='w-3/4' src={img}></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-orange-600 text-center">Login now!</h1>

      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Log In" /> 
          <button onClick={handleLogin} className="btn btn-outline btn-accent mt-3">Sign In with Google</button>
          <button className="btn btn-outline btn-secondary mt-2">Sign In with GitHub</button>

        </div>
      </form>
      <p className='text-center mb-10'>New to Genius Car? <Link className='  text-orange-600' to="/signup"> Sign Up</Link> </p>
    </div>
  </div>
</div>
    );
};

export default LogIn;