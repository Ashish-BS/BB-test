import React from 'react';
import { Chart as ChartJS, CategoryScale, ChartData, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import {  Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);
// temporarily data is hardcodeded
const labels = ['Facebook', 'Instagram', 'YouTube']

const reachPercent = [58.02, 371.77, 759.63]
const followerPercent = [8.47, 267.88, 67.32]


export const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
        y: {
            max: 1000,
            ticks: {
                stepSize: 250
            }
        },
        x: {
            bounds: 'data',
            grid: {
                display: false
            },
            offset: true
        },

    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
};

const data: ChartData<'line'> = {
    labels,
    datasets: [
        {
            label: 'Reach %',
            data: labels.map((label, index) => (reachPercent[index])),
            borderColor: 'blue',
            backgroundColor: 'blue',
            tension: 0.2,
            datalabels: {
                display: true,
                color: "blue",
                align: 'top',
                anchor: 'end',
            }
        },
        {
            label: 'Followers %',
            data: labels.map((label, index) => (followerPercent[index])),
            borderColor: 'red',
            backgroundColor: 'red',
            tension: 0.2,
            datalabels: {
                display: true,
                color: "red",
                align: 'top',
                anchor: 'end',
            }
        }
    ]
};

export function SocialProofChart() {
    return <Line options={options} data={data} />;
}
