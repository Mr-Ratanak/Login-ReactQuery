import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Index from './pages/product/Index'

import RootLayout from './layouts/RootLayout'
import Login from './pages/login/Login'
import CreateProduct from './pages/product/CreateProduct'
import IndexCustomer from './pages/customer/IndexCustomer'
import CreateCustomer from './pages/customer/CreateCustomer'
import CreateOrder from './pages/order/CreateOrder'
import IndexOrder from './pages/order/Index'



const AppRoutes = () => {
  return (
       <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/customers' element={<IndexCustomer />}></Route>
            <Route path='/customers/create' element={<CreateCustomer />}></Route>
            <Route path='/products' element={<Index />}></Route>
            <Route path='/products/create' element={<CreateProduct />}></Route>
            <Route path='/orders' element={<IndexOrder />}></Route>
            <Route path='/orders/create' element={<CreateOrder />}></Route>
          </Route>
      </Routes>
  )
}

export default AppRoutes
