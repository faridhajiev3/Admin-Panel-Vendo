import React from 'react'
import "../scss/settings.scss"
import { Link, NavLink, Outlet } from 'react-router-dom'

function Settings() {
    return (
        <div className="settings-container">
            <div className="sidebars">
                {/* <h2>Settings</h2> */}
                <NavLink to="profil" className="set-link">Profile</NavLink>
                <NavLink to="brand" className="set-link">Brand</NavLink>
                <NavLink to="password" className="set-link">Change Password</NavLink>
                <NavLink to="security" className="set-link">Security</NavLink>
                <NavLink to="brand" className="set-link">Payment</NavLink>
                <NavLink to="brand" className="set-link">Notifications</NavLink>
            </div>

            <Outlet />
        </div>
    )
}

export default Settings