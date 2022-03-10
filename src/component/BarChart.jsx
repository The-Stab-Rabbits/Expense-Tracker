import React, { useState, useEffect } from "react";
import { DataContext } from './DataContext';
import { useContext } from 'react';
import { Bar } from 'react-chartjs-2'


const BarChart = props => {
    const datasets = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433]
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
        <div className='chart' >
            <div className='monthTotal'>Monthly Balance: ${monthTotal}</div>
            <Bar
                data={datasets}
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
                }}
            />
        </div >
    );

}

export default BarChart