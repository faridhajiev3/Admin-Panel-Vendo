import React from 'react'
import AnalysisCard from '../../components/AnalysisCard'
import { TbBasketMinus, TbBasketPlus } from 'react-icons/tb'
import { GiTwoCoins } from 'react-icons/gi'
import { FaWarehouse } from 'react-icons/fa6'
import "../../scss/dashboard.scss"
import { Outlet, useNavigate } from 'react-router-dom'
import General from '../../addnewproduct/General'
import BarChart from '../../graphs/BarChart'
import DoughnutChart from '../../graphs/DoughnutChart'

function Dashboard() {
    const navigate = useNavigate()
    return (
        <div className='dashboard-container'>
            <div className='analysis-info'>
                <h2 className='desc'>
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
            </div>
            <div className='graphs'>
                <BarChart/>
                <DoughnutChart/>
            </div>
        </div >
    )
}

export default Dashboard