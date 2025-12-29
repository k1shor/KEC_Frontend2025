import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

const MyRoutes = () => {
    return (
        <BrowserRouter>
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
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />

                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='products' element={<Products />} />

                    <Route path='display' element={<Display />} />
                    <Route path='fetchdata' element={<FetchData/>}/>
                    <Route path='post/:id' element = {<PostDetails/>}/>
                    
                    <Route path='counter' element = {<ReduxCounter/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes