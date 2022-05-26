import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from './Loading';
const Navbar = () => {
  const [user, loading] = useAuthState(auth)
  if(loading){
    return <Loading></Loading>
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
            {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          }
            <li >
            <NavLink to='/blogs'>
              Blogs
              
            </NavLink>

          </li>
            
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost normal-case text-xl">Brush manufacturer</Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
          {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          }
          <li >
            <NavLink to='/blogs'>
              Blogs
              
            </NavLink>

          </li>
          
        </ul>
      </div>
      <div class="navbar-end">
        {
          !user && <Link to='/login'>Login</Link>
        }
        {
          user && <div><button className='xl:btn xl:btn-outline md:hidden lg:hidden hidden'>{user.displayName}</button> <button onClick={logout} className='md:ml-3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'>Sign out</button></div>

        }
      </div>
    </div>
  );
};

export default Navbar;