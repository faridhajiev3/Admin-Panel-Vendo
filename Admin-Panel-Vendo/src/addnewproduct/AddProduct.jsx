import React from 'react'
import "../scss/addproduct.scss"
import { NavLink, Outlet } from 'react-router-dom'

function AddProduct() { 
    return (
        <div>
            <div className="tabs">
                <NavLink to="general" className="tab">General</NavLink>
                <NavLink to="detail" className="tab">Detail</NavLink>
                <NavLink to="information" className="tab">Google Information</NavLink>
            </div>
            <Outlet/>
        </div>
    )
} 

export default AddProduct