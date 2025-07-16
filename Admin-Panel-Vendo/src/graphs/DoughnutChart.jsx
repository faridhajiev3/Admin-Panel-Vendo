import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['Rare Beauty Blush', 'Rare Beauty Foundation', 'Rare Beauty Bronzer', 'Rare Beauty Highlighter'],
        datasets: [
            {
                data: [24000, 11000, 9000, 35000],
                backgroundColor: ['#d6d6d6', '#b0b0b0', '#e9e9e9', '#000000'],
                borderWidth: 2,
                cutout: '70%',
                borderRadius: 10,
                spacing: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Bu, genişlik-hündürlüyü flexibl edir
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: { label: (context) => `${context.label}: ${context.raw.toLocaleString()} sales` },
            },
        },
    };

    const totalSales = 290565;

    return (
        <div className='w-full max-w-[580px] bg-white rounded-[16px] p-6'>
            <div className='flex justify-between items-center mb-[20px]'>
                <h2 className=' text-[18px] text-[#888]'>Best Selling Products</h2>
                <div className='px-[14px] py-[8px] bg-white border border-[#ccc] rounded-[20px] text-[14px]'>
                    Rare Beauty ⌄
                </div>
            </div>

            <div className='relative h-[350px] min-h-[250px]'>
                <Doughnut data={data} options={options} />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                    <div className='text-[28px]'>{totalSales.toLocaleString()}</div>
                    <div className='text-[#888]'>Total sales</div>
                </div>
            </div>

            <div className='mt-[30px] flex flex-col gap-[12px] text-[14px]'>
                <span className='text-[#999]'><span className={dot("text-[#d6d6d6]")} ></span> Rare Beauty Blush — <b>24k sales</b></span>
                <span className='text-[#999]'><span className={dot("text-[#b0b0b0]")} ></span> Rare Beauty Foundation — <b>11k sales</b></span>
                <span className='text-[#999]'><span className={dot("text-[#e9e9e9]")} ></span> Rare Beauty Bronzer — <b>9k sales</b></span>
                <span className='text-[#999]'><span className={dot("text-[#000]")}></span> Rare Beauty Highlighter — <b>35k sales</b></span>
            </div>
        </div>
    );
};

const dot = (color) => ({
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '8px',
    verticalAlign: 'middle',
});

export default DoughnutChart;