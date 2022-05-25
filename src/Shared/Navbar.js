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
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>

            </li>
            <li><a>Item 3</a></li>
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
          <li tabindex="0">
            <a>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>

          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        {
          !user && <Link to='/login'>Login</Link>
        }
        {
          user && <div><button className='lg:btn lg:btn-outline hidden'>{user.displayName}</button> <button onClick={logout} className='md:ml-3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'>Sign out</button></div>

        }
      </div>
    </div>
  );
};

export default Navbar;