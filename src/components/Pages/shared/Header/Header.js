import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg'
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';





const Header = () => {
    const {user,logOut} =useContext(AuthContext)
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
        
    }
    const menuBar = <>
            <li><Link to="/signup" className="btn btn-primary mx-3">Sign Up</Link></li>
            <li><Link to="/" className="btn btn-primary">Home</Link></li>


    { user?.email ?
        <>
        <li><Link to="/" className="btn btn-primary mx-3" onClick={handleLogOut}>Log OuT</Link></li>
        <li><Link to="/orders" className="btn btn-primary">Orders</Link></li>
        </>

        :
        <li><Link to="/login" className="btn btn-primary mx-3">Log In</Link></li>

    }

   
    </>

    return (
        <div  className="navbar h-20 mb-12 pt-12 bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
       <div>
        {user?
        <>
        {user?.email}
        <div className="avatar  ">
         <div >
         <img className=" w-12 rounded-full" alt='' src={user?.photoURL} />
         </div>
            </div>
        </>
        :<p>no one</p>

        }
       </div>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {
        menuBar
      }
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={logo}></img></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {
        menuBar
    }
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appointment</button>

  </div>
</div>
    );
};

export default Header;