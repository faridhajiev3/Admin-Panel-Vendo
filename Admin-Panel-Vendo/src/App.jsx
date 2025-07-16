import { useState } from 'react'
import './scss/header.scss'
import Sidebar from './header/Sidebar'
import Topbar from './header/Topbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'
import { Route, Routes } from 'react-router-dom'
import General from './addnewproduct/General'
import Detail from './addnewproduct/Detail'
import AddProduct from './addnewproduct/AddProduct'
import Orders from './pages/Orders/Orders'
import Transactions from './pages/Transactions/Transactions'
import Googleİnformation from './addnewproduct/Googleİnformation'
import Profile from './settings/Profile'
import Settings from './settings/Settings'
import Brand from './settings/Brand'
import ChangePassword from './settings/ChangePassword'
import Security from './settings/Security'

function App() {

  return (
    <>
      <div className='dashboard'>
        <Sidebar />
        <Topbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Products />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/addproduct" element={<AddProduct />} >
              <Route index element={<General />} />
              <Route path='general' element={<General />} />
              <Route path='detail' element={<Detail />} />
              <Route path='information' element={<Googleİnformation />} />
            </Route>
            <Route path='/settings' element={<Settings/>}>
              <Route index element={<Profile />} />
              <Route path='profil' element={<Profile />} />
              <Route path='brand' element={<Brand />} />
              <Route path='password' element={<ChangePassword />} />
              <Route path='security' element={<Security />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

