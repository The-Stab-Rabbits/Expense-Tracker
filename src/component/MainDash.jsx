import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";


const MainDash = () => {
  const { database, setDatabase, currentBalance, setBalance, month, setMonth, deleteClick, submitClick } = useContext(DataContext)

    return (

        <>
        <div className="balance">
        <h2>Balance: $ {currentBalance}</h2>
      </div>

      <div className="cards">
        {database.map((item, i) => (
          
          <div className="innerCard" key = {item.id}>
            <ul>
              <li>
                <span>Price: </span>${item.amount}
              </li>
              <li>
                <span>Vendor: </span> {item.vendor}{" "}
              </li>
              <li>
                <span>Category: </span> {item.category}{" "}
              </li>
              <li>
                <span>Date: </span> {item.date}{" "}
              </li>
              <button
                className="remove"
                onClick={() => {
                  deleteClick(item.id);
                }}
              >
                Remove Expense {item.id}
              </button>
            </ul>
          </div>
        ))}
      </div>
      </>
    )

}

export default MainDash;