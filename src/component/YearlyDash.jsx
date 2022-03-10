import React, { useState, useEffect } from "react";
import { DataContext } from './DataContext';

import { Pie, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';
import { useContext } from 'react';

ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);
const Chart = props => {
    const { year, yearChart, catChart } = useContext(DataContext)
    console.log('catChart', catChart)
    const datasets = {
        // labels : ['January', 'February', 'March', 'April', 'May'],
        labels: Object.keys(catChart),
        datasets: [
            {
                label: 'Rainfall',
                //backgroundColor: backgrounds;
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(22,44,15,1)',
                    'rgba(66,192,192,1)',
                    'rgba(66,0,192,1)',
                    'rgba(66,192,192,1)',
                ],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                // data: [65, 100, 80, 81, 56]
                data: Object.values(catChart),
            }
        ]
    }

    let monthTotal = 0;
    datasets.datasets[0].data.forEach(element => {
        monthTotal += element;
    })
    // console.log(yearChart, Object.values(yearChart));

    const yearSummaryAmounts = []

    const stringMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']


    for (let i = 0; i < 12; i++) {
        if (yearChart[stringMonths[i]] === undefined) {
            yearSummaryAmounts.push(0);
            continue;
        }
        yearSummaryAmounts.push(yearChart[stringMonths[i]]);
    }

    const barDatasets = {

        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: "Spend Per Month",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: yearSummaryAmounts
            }
        ],
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Summary of Yearly Expenses'
            }
        }
    }
    return (
        <div className='monthly-dash'>
            <div className='monthTotal' >Yearly Balance: ${monthTotal}</div>
        <div className='yearCharts'>
            
            <div className="pieChart">
                <Pie
                    data={datasets}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 60
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        interaction:{
                            mide:'point'
                        }
                    }}
                />
            </div>
            <div className='barChart'>
                <Bar
                    data={barDatasets}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }} />
            </div>
        </div>
        </div>
    );
}

// const BarChart = props => {
//     const datasets = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//         datasets: [
//             {
//                 label: "Population (millions)",
//                 backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
//                 data: [2478, 5267, 734, 784, 433]
//             }
//         ],
//         options: {
//             legend: { display: false },
//             title: {
//                 display: true,
//                 text: 'Summary of Yearly Expenses'
//             }
//         }
//     }

//     return (
//         <div className='chart' >
//             <div className='monthTotal'>Monthly Balance: ${monthTotal}</div>
//             <Bar
//                 data={datasets}
//                 options={{
//                     title: {
//                         display: true,
//                         text: 'Average Rainfall per month',
//                         fontSize: 20
//                     },
//                     legend: {
//                         display: true,
//                         position: 'right'
//                     }
//                 }}
//             />
//         </div >
//     );

// }
export default Chart;





