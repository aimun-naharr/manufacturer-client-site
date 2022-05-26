import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CancelModal from '../../Shared/CancelModal';
import Loading from '../../Shared/Loading';

const MyOrders = () => {

  const [deleteOrder, setDeleteOrder] = useState(null)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const email = user.email
  const { isLoading, data: orders, refetch } = useQuery('orders', () =>
    fetch(`https://sheltered-wildwood-63825.herokuapp.com/order/${email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      if (res.status === 401 || res.status === 403) {
        navigate('/')
      }
      return res.json()
    }

    )
  )

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product Name</th>
            <th>Payment</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}

          {
            orders?.map((order, index) =>
              <tr>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.name}</td>
                <td>
                  {order.paid ? <span className='text-success'>{order.transactonId}</span> : <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success'>Pay</button></Link>}


                </td>
                <td>
                  {
                    !order.paid && <label for="cancel-modal" onClick={() => setDeleteOrder(order)} className='btn btn-outline btn-error'>Cancel</label>
                  }
                </td>
                {
                  deleteOrder && <CancelModal setDeleteOrder={setDeleteOrder} refetch={refetch} order={order}></CancelModal>
                }
              </tr>
            )
          }

          {/* <  class="btn modal-button">open modal</label> */}

        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;