import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarData } from './NavbarData'

function Sidebar() {
    return ( 
        <div className='sidebar'>
            <div>
                <div className='logo'>
                    VENDO
                </div>
                <div className='menu'>
                    {
                        NavbarData.map((item, index) => (
                            <NavLink to={item.path} key={index}>
                                {item.icon}
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            {/* <div className="bottom-menu">
                <a href="#">Settings</a>
                <a href="#">Hesab</a>
                <a href="#">Çıxış</a>
                <p className="smart">© 2024 Smart Business Manager</p>
            </div> */}
        </div>
    )
}

export default Sidebar