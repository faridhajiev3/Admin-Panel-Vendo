import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: [
            'Rare Beauty Blush',
            'Rare Beauty Foundation',
            'Rare Beauty Bronzer',
            'Rare Beauty Highlighter',
        ],
        datasets: [
            {
                data: [24000, 11000, 9000, 35000],
                backgroundColor: [
                    '#d6d6d6',
                    '#b0b0b0',
                    '#e9e9e9',
                    '#000000',
                ],
                borderWidth: 2,
                cutout: '70%',
                borderRadius: 10,
                spacing: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.label}: ${context.raw.toLocaleString()} sales`;
                    },
                },
            },
        },
    };

    const totalSales = 290565;

    return (
        <div style={{
            width: '530px',
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '24px',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#888', fontSize: '18px' }}>Best Selling Products</h2>
                <div style={{
                    padding: '8px 14px',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '20px',
                    fontSize: '14px'
                }}>
                    Rare Beauty ⌄
                </div>
            </div>

            <div style={{ position: 'relative', height: '350px' }}>
                <Doughnut data={data} options={options} />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{totalSales.toLocaleString()}</div>
                    <div style={{ color: '#888' }}>Total sales</div>
                </div>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <span style={{ color: '#999' }}><span style={dot('#d6d6d6')}></span> Rare Beauty Blush — <b>24k sales</b></span>
                <span style={{ color: '#999' }}><span style={dot('#b0b0b0')}></span> Rare Beauty Foundation — <b>11k sales</b></span>
                <span style={{ color: '#999' }}><span style={dot('#e9e9e9')}></span> Rare Beauty Bronzer — <b>9k sales</b></span>
                <span style={{ color: '#000' }}><span style={dot('#000')}></span> Rare Beauty Highlighter — <b>35k sales</b></span>
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
