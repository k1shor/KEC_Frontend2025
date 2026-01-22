import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'
import Forth from './Forth'
import NotFound from './NotFound'
import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Display from './pages/Dispaly'
import FetchData from './pages/FetchData'
import PostDetails from './pages/PostDetails'
import ReduxCounter from './pages/ReduxCounter'
import EmailVerification from './pages/EmailVerification'
import LoggedIn from './components/LoggedIn'
import AdminSidebar from './components/layout/admin/AdminSidebar'
import AdminLayout from './components/layout/admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import Categories from './pages/Admin/Categories'
import AddCategory from './pages/Admin/AddCategory'
import UpdateCategory from './pages/Admin/UpdateCategory'
import Blogs from './pages/Blog'
import AdminProducts from './pages/Admin/AdminProducts'
import AddProduct from './pages/Admin/AddProduct'
import UpdateProduct from './pages/Admin/UpdateProduct'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import PaymentForm from './pages/PaymentForm'
import PaymentComplete from './pages/PaymentComplete'
import Orders from './pages/Admin/Orders'

const MyRoutes = () => {
    return (
        <HashRouter>
            {/* <Header/> */}

            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route path='/' element = {<Forth/>} /> */}
                    <Route index element={<Homepage />} />

                    <Route path='first' element={<First />}></Route>
                    <Route path='second' element={<Second />} />
                    <Route path='test/:name' element={<Third />} />

                    {/* Page Not Found */}
                    <Route path='*' element={<NotFound />} />

                    <Route path='/' element={<LoggedIn />}>
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>


                    <Route path='/verify/:token' element={<EmailVerification />} />

                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='products' element={<Products />} />
                    <Route path='blogs' element={<Blogs />} />

                    <Route path='display' element={<Display />} />
                    <Route path='fetchdata' element={<FetchData />} />
                    <Route path='post/:id' element={<PostDetails />} />

                    <Route path='counter' element={<ReduxCounter />} />

                    <Route path='/product/:id' element={<ProductDetails />} />

                    <Route path='cart' element={<Cart />} />
                    <Route path='checkout' element={<Checkout />} />

                    <Route path='/' element={<Payment />}>
                        <Route path='payment' element={<PaymentForm />} />
                        <Route path='order/complete' element={<PaymentComplete />} />
                    </Route>

                </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route path='dashboard' element={<Dashboard />} />

                    <Route path='category' element={<Categories />} />
                    <Route path='category/new' element={<AddCategory />} />
                    <Route path='category/edit/:id' element={<UpdateCategory />} />

                    <Route path='products' element={<AdminProducts />} />
                    <Route path='product/new' element={<AddProduct />} />
                    <Route path='product/edit/:id' element={<UpdateProduct />} />

                    <Route path='orders' element={<Orders />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default MyRoutes