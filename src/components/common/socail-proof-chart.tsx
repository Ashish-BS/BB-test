import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);



const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: false
        },
    }

};

// temporarily data is hardcodeded
const labels = ['Facebook', 'Instagram', 'YouTube'];
const reach = [18779, 3048, 26550]
const followers = [4039, 17973, 21251]

const data: ChartData<'bar'> = {
    labels,
    datasets: [
        {
            label: 'Reach',
            data: labels.map((_, index) => reach[index]),
            backgroundColor: '#165BAA',
            datalabels: {
                display: true,
                color: "#165BAA",
                formatter: Math.round,
                align: 'top',
                anchor: 'end',
                font: (context) => {
                    const canvasWidth = context.chart.canvas.width;
                    if (canvasWidth <= 676) {
                        return { size: 8 };
                    }
                    return { size: 12 };
                }
            },
            barPercentage: 0.5,
        },
        {
            label: 'Followers',
            data: labels.map((_, index) => followers[index]),
            backgroundColor: '#FA7E1E',
            datalabels: {
                display: true,
                color: "#FA7E1E",
                formatter: Math.round,
                align: 'top',
                anchor: 'end',
                font: (context) => {
                    const canvasWidth = context.chart.canvas.width;
                    if (canvasWidth <= 676) {
                        return { size: 8 };
                    }
                    return { size: 12 };
                }
            },
            barPercentage: 0.5
        },
    ],
};

export function SocialProofChart() {
    return <Bar options={options} data={data} />;
}
