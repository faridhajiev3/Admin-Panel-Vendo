import React from 'react'

function AnalysisCard({ icon, content, price }) {
    return (
        <div className='card-item  bg-white rounded-xl w-full h-auto p-4 md:w-[23%] md:p-9 '>
            <div className='card-content flex items-center justify-between '>
                <div className='plus' >
                    <p className='text-[18px] text-black pt-3 pb-1'>{content}</p>
                    <h3 className='text-[25px]'>{price}$</h3>
                </div>
                <div className='card-icon text-[25px] border border-[#b8b8b8] rounded-[10px] flex items-center justify-center w-[50px] h-[55px] p-[5px]'>
                    {icon}
                </div>
            </div>
            <p className='lastMounth text-[#48B478] pt-6'> +15.90% from last month</p>
        </div>
    )
}

export default AnalysisCard

