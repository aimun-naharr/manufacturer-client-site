import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Login from './Pages/Login';
import PrivateRoute from './Shared/PrivateRoute';
import Purchase from './Pages/Purchase';
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Pages/Dashboard/Payment';
import AllUsers from './Pages/Dashboard/AllUsers';
import AdminRoute from './Pages/AdminRoute';
import AddProduct from './Pages/Dashboard/AddProduct';
import NotFound from './Pages/NotFound';
import Blogs from './Pages/Blogs';
import Portfolio from './Pages/Portfolio';
function App() {
  return (
    <div className='lg:px-20'>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/purchase/:id' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>}></Route>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard>
        </Dashboard></PrivateRoute>}>
          <Route index  element={<MyOrders></MyOrders>}></Route>
          <Route path='myorders'  element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='alluser' element={<AdminRoute><AllUsers></AllUsers></AdminRoute>}></Route>
          <Route path='addproduct' element={<AdminRoute><AddProduct></AddProduct></AdminRoute>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>

        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
