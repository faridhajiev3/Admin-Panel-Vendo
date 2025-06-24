import React from 'react'
import AnalysisCard from '../../components/AnalysisCard'
import { TbBasketMinus, TbBasketPlus } from 'react-icons/tb'
import { GiTwoCoins } from 'react-icons/gi'
import { FaWarehouse } from 'react-icons/fa6'
import "../../scss/dashboard.scss"
import { Outlet, useNavigate } from 'react-router-dom'
import General from '../../addnewproduct/General'

function Dashboard() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='analysis-info'>
                <h2>
                    Dashboard
                </h2>
                <div>
                    <button className='analysis-btn'>Günlük</button>
                    <button className='analysis-btn'>Həftəlik</button>
                    <button className='analysis-btn'>Aylıq</button>
                    <button className='analysis-btn'>İllik</button>
                </div>
            </div>
            <div className='analysis-main'>
                <div className='analysis-content'>
                    <AnalysisCard icon={<TbBasketPlus />} content={"Total Income"} price={"150"} />
                    <AnalysisCard icon={<GiTwoCoins />} content={"Total Order"} price={"600"} />
                    <AnalysisCard icon={<FaWarehouse />} content={"Active Products"} price={"3000"} />
                    <AnalysisCard icon={<TbBasketMinus />} content={"Customer Count"} price={"1200"} />
                </div>
                <div className="dasboard-con">
                    <div className="section orders">
                        <h2>Last Orders</h2>
                        <p>Order summary of the last 7 days</p>
                        <ul>
                            <li>#3209 <span className="status">Completed</span> <span class="amount">$234</span></li>
                            <li>#3208 <span className="status">Completed</span> <span class="amount">$109</span></li>
                            <li>#3207 <span className="status">In cargo</span> <span class="amount">$70</span></li>
                            <li>#3206 <span className="status">Prepared</span> <span class="amount">$109</span></li>
                        </ul>
                    </div>
                    <div class="section products">
                        <h2>Best Selling Products</h2>
                        <p>Your most popular products this month</p>
                        <ul>
                            <li>Chanel Rouge Coco Ruj <span className="sales">234 sales</span> <span class="amount">$234</span></li>
                            <li>Dior Sauvage <span className="sales">100 sales</span> <span class="amount">$200</span></li>
                            <li>MAC Studio Fix Foundation <span className="sales">589 sales</span> <span class="amount">$38</span></li>
                            <li>YSL Parfume <span className="sales">49 sales</span> <span class="amount">$400</span></li>
                        </ul>
                    </div>
                </div>

                <div className='quick-con'>
                    <div className='quick-actions'>
                        <h2>Quick Actions</h2>
                        <p>Quick access to frequently used operations</p>
                        <button className='product-btn' onClick={() => navigate("/addproduct")}>Add new product</button>
                        <button className='stock-btn'>Stock management</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard