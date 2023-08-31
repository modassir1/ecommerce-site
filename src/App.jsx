import React, { Children } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Orders from './pages/order/Orders';
import Cart from './pages/cart/Cart';
import Dashbord from './pages/admin/dashboard/Dashbord';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/admin/dashboard/Dashbord';
import AllProducts from './pages/allProducts/AllProducts';
const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<ProtectedRoute>
            <Orders />
          </ProtectedRoute>

          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashbord' element={
            <ProtectedRouteForAdmin>
              <Dashbord />
            </ProtectedRouteForAdmin>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/addproduct' element={<AddProduct />}></Route>
          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path='/*' element={<NoPage />} />
          <Route path='/allproducts' element={<AllProducts />} />

        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App

// user
export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

// admin
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if (admin.user.email === 'mmodassir115@gmail.com') {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}