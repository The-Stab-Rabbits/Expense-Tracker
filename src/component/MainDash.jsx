import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";


const MainDash = () => {
  const { database, setDatabase, currentBalance, setBalance, month, setMonth, deleteClick, submitClick } = useContext(DataContext)

    return (

        <>
        <div className="main-dash">
            <div className="addExpense">
            <h1>Expenses</h1>
              
              <input id="Amount" placeholder="Enter Cost"></input>

              <input id="Vendor" placeholder="Vendor"></input>

              <select id="Category" placeholder="Category">
                <option value="Groceries">Groceries</option>
                <option value="Food + Drink">Food + Drink</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Gas">Gas</option> 
                <option value="Entertainment">Entertainment</option> 
              </select>
              
              <input type= 'date' id="Date"></input>

              <div className="btnContainer">
                <button className="submit" onClick={submitClick}>
                  Submit
                </button>
              </div>

            </div>
          

        <div className="balance">
        <h2>Balance: $ {currentBalance}</h2>
      </div>

      <div className="cards">
        {database.map((item) => (
          
          <div className="innerCard" key = {item.id}>
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
            <button className="remove" onClick={() => { deleteClick(item.id)}}>Remove Expense {item.id}</button>
          </ul>
          </div>
        ))}
      </div>
      </div>
      </>
    )

}

{/* <table>
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Vendor</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${item.amount}</td>
                  <td>{item.vendor}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td><button className="remove" onClick={() => {deleteClick(item.id)}}>❌</button></td>
                </tr>
              </tbody>
              </table> */}
export default MainDash;