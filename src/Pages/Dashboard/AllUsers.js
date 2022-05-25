import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { isLoading, error, data:users,refetch } = useQuery('users', () =>
     fetch('http://localhost:5000/users',{
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res =>
       res.json()
     )
   )
   if(isLoading){
       return(<Loading></Loading>)
   }
 
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user, index)=><UserRow refetch={refetch} key={user._id} user={user}></UserRow>)
      }
      
      
      
    </tbody>
  </table>
</div>
    );
};

export default AllUsers;