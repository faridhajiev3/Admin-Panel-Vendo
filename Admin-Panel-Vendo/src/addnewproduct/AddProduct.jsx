import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AddProduct() {
    return (
        <div>
            <div className="tabs">
                <NavLink to="general" className="tab">General</NavLink>
                <NavLink to="detail" className="tab">Detail</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}

export default AddProduct