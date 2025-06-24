import React from 'react'

function AnalysisCard({ icon, content, price }) {
    return (
        <div className='card-item'>
            <div className='card-content'>
                <div className='plus' >
                    <p>{content}</p>
                    <h3>{price}$</h3>
                </div>
                <div className='card-icon'>
                    {icon}
                </div>
            </div>
            <p className='lastMounth'> +15.90% from last month</p>
        </div>
    )
}

export default AnalysisCard