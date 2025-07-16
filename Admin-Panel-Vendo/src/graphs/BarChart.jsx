import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Qeydiyyat
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Total Profit',
                data: [2800, 2500, 3800, 3100, 2000, 2300],
                backgroundColor: '#000',
                barThickness: 40,
                borderRadius: 10,
            },
            {
                label: 'Total Profit (Projected)',
                data: [5000, 4700, 6500, 6100, 4000, 4300],
                backgroundColor: (context) => {
                    const { chart } = context;
                    const ctx = chart.ctx;
                    const pattern = ctx.createPattern(generatePattern(ctx), 'repeat');
                    return pattern;
                },
                barThickness: 40,
                borderRadius: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 7000,
                ticks: { stepSize: 1000 },
                grid: { color: '#e0e0e0' },
            },
            x: { grid: { display: false } },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: { usePointStyle: true, pointStyle: 'rectRounded', boxWidth: 20, padding: 20, color: '#000' },
            },
        },
    };

    return (
        <div className='w-full max-w-[580px] bg-white rounded-[12px] p-5'>
            <div className='mb-5'>
                <h2 className='m-0 text-[18px] text-[#333]'>Total Product Sales</h2>
                <div className='flex items-center mt-[10px]'>
                    <span className='text-[24px] font-bold mr-[10px]'>$345,695</span>
                    <span className='bg-[#f3d252] px-[10px] py-[5px] rounded-[10px] font-medium'>-11%</span>
                </div>
            </div>
            <div className='h-[430px] min-h-[300px]'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

function generatePattern(ctx) {
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = 10;
    patternCanvas.height = 10;
    const patternContext = patternCanvas.getContext('2d');
    patternContext.strokeStyle = '#ccc';
    patternContext.lineWidth = 2;
    patternContext.beginPath();
    patternContext.moveTo(0, 10);
    patternContext.lineTo(10, 0);
    patternContext.stroke();
    return patternCanvas;
}

export default BarChart;