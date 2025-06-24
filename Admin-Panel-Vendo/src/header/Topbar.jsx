import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Topbar() {
    return (
        <div className="topbar">
            <div className='icons'>
                <TbWorld className='i'/>
                <FaBell className='i'/>
            </div>
            {/* <div className='view'>
                <div className="dropdown">
                    <select>
                        <option>Mağazalar</option>
                        <option>Mağaza 1</option>
                        <option>Mağaza 2</option>
                    </select>
                </div>

            </div> */}
            <div className='users'>
                <div className='usersImage'>

                </div>
                <div >
                    <h3>Ali Ahmadli</h3>
                    <p>Owner</p>
                </div>
            </div>
        </div>
    )
}

export default Topbar