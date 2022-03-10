import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";
import { Pie } from "react-chartjs-2";
import Chart from "./Chart";


const MonthlyDash = () => {
    const {database, currentBalance, setBalance, month, setMonth, deleteClick,  monthDatabase, setMonthDatabase, monthChart, setMonthChart } = useContext(DataContext)
    

return (
    <>
    <div className='monthly-dash'>
        <Chart/> 
    {/* </div> */}

      <div className='cards'>
      {monthDatabase.map((item) => (
        <div className='innerCard' key={item.id}>
         <ul>
              <li>
                <span>Price: </span>${item.amount}
              </li>
              <li>
                <span>Vendor: </span> {item.vendor}
              </li>
              <li>
                <span>Category: </span> {item.category}
              </li>
              <li>
                <span>Date: </span> {item.date}
              </li>
              <button className="remove" onClick={() => {deleteClick(item.id);}}> Remove Expense </button>
            </ul> 
          
      </div>
      ))}
        </div>
        </div>
    </>


)

}

export default MonthlyDash;