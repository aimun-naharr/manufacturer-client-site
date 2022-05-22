import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Login from './Pages/Login';
import PrivateRoute from './Shared/PrivateRoute';
import Purchase from './Pages/Purchase';

function App() {
  return (
    <div className='lg:px-20'>
      <Navbar></Navbar>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/purchase' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
