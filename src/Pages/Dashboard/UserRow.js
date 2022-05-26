import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email, role}=user
    const makeAdmin=()=>{
        fetch(`https://sheltered-wildwood-63825.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.modifiedCount){
                refetch()
              toast.success('Succesfully made an admin')
            }
            
          })
    }
    return (
        
            <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-primary">Make admin</button>}</td>
        <td>Blue</td>
      </tr>
       
    );
};

export default UserRow;