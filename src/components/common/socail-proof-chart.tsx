import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import config from '@/constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);



const options: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
        y: {
            grid: {
                color: 'white'
            },
        },
        x: {
            grid: {
                color: 'white'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: (context) => {
                    const canvasWidth = context.chart.canvas.width;
                    if (canvasWidth <= 1000) {
                        return { size: 8 };
                    }
                    return { size: 12 };
                }
            }
        },
        title: {
            display: false
        },
    },
};

// temporarily data is hardcodeded
const labels = ['Facebook', 'Instagram', 'YouTube'];
const reach = [config.SOCIAL_MEDIA_STATS.FACEBOOK.REACH, config.SOCIAL_MEDIA_STATS.INSTAGRAM.REACH, config.SOCIAL_MEDIA_STATS.YOUTUBE.REACH]
const followers = [config.SOCIAL_MEDIA_STATS.FACEBOOK.FOLLOWERS, config.SOCIAL_MEDIA_STATS.INSTAGRAM.FOLLOWERS, config.SOCIAL_MEDIA_STATS.YOUTUBE.FOLLOWERS]

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
                    if (canvasWidth <= 1000) {
                        return { size: 8 };
                    }
                    return { size: 12 };
                },
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
                    if (canvasWidth <= 1000) {
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
