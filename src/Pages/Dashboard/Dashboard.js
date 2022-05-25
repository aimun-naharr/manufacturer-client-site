import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile p-2">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col ">
    {/* <!-- Page content here --> */}
  <h1 className='text-5xl'>Dashboard</h1>
  <Outlet />
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to='myorders'>My orders</NavLink></li>
      <li><NavLink to='addreview'>Add a review</NavLink></li>
      <li><NavLink to='myprofile'>My profile</NavLink></li>
      {admin && <li><NavLink to='allUser'>All User</NavLink></li>}
      
    </ul>
  
  </div>
  
</div>
    );
};

export default Dashboard;