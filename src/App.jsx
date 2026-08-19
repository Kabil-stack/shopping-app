

import './App.css'
import Products from './components/Products';
import Header from './components/Header';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import WishList from './components/WishList';
import Order from './components/Order';
import Payment from './components/Payment';
import Register from './components/Register';
import Review from './components/Review';
import Reset from './components/Reset';
import ProtectedRoutes from './utilities/ProtectedRoutes';
import { DetailsProvider } from '../contexts/DetailsContext';


function App() {
  
  return (
    <div>
      <DetailsProvider>
      <Header />
      <BrowserRouter>
      <nav className='navBar'>
       <NavLink to='/' className={({isActive}) => isActive ? "active" : ""}> Home </NavLink>
       <NavLink to='/products'  className={({isActive}) => isActive ? "active" : ""}> Products </NavLink>
       
       <NavLink to='/wishlist'  className={({isActive}) => isActive ? "active" : ""}> WishList</NavLink>
       <NavLink  to='/login'  className={({isActive}) => isActive ? "active" : ""}>Login</NavLink>
       
      </nav>
      <Routes>
        <Route path='/login' element={<Login
        />} />
         <Route path='/register' element={<Register />}/>
         <Route path='/reset' element={<Reset />}/>
        <Route element={<ProtectedRoutes />}>

        
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/products/details/:id' element={<ProductDetails />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/order' element={<Order />} />
        <Route path='/payment' element={<Payment />}/>
       
        <Route path='/review' element={<Review/>}/>
        
        </Route>
      </Routes>
      </BrowserRouter>
      </DetailsProvider>
    </div>
  )
}

export default App
