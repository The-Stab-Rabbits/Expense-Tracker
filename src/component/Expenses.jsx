import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Pink from "../image/PinkA.jpg";
//Expenses Component
const Expenses = () => {
  //created state to hold database
  const [database, setDatabase] = useState([]);
  //created state to hold net price of expense extries
  const [currentBalance, setBalance] = useState(0);
  // created state to hold index of database extries
  const [currentIndex, setIndex] = useState(1);

  // upon rendering, sets state to current database
  useEffect(() => {
    fetch("/api/get")
      .then((response) => response.json())
      .then((data) => setDatabase(data));
  }, []);

  // //upon rending, sets currentBalance state to current database net price
  useEffect(() => {
    fetch("/api/getBalance")
      .then((response) => response.json())
      .then((data) => setBalance(data));
  }, []);

  // //upon rending, sets currentIndex to index of last entry of database
  useEffect(() => {
    fetch("/api/index")
      .then((response) => response.json())
      .then((data) => setIndex(data + 1));
  }, []);

  //upon click, submits post requested, updated database with current extry.  Also updates current states with new information
  function submitClick() {
    const index = currentIndex;
    incrementIndex();
    const vendor = document.getElementById("Vendor").value;
    const amount = document.getElementById("Amount").value;
    const category = document.getElementById("Category").value;
    const date = document.getElementById("Date").value;
    console.log(date);
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: index,
        amount: amount,
        vendor: vendor,
        category: category,
        date: date,
      }),
    };
    fetch("/api/expenses", postOptions)
      .then((response) => response.json())
      .then((data) => {
        addBalance(data.amount);
        return addItem(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function deleteClick(buttonIndex) {
    console.log("button index", buttonIndex);
    const id = buttonIndex;
    const deleteOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`/api/${id}`, deleteOptions)
      .then((response) => response.json())
      .then((response) => {
        fetch("/api/get")
          .then((response) => response.json())
          .then((data) => setDatabase(data));
        fetch("/api/getBalance")
          .then((response) => response.json())
          .then((data) => setBalance(data));
        fetch("/api/index")
          .then((response) => response.json())
          .then((data) => setIndex(data));
      });
  }
  // adds new extry to current state
  function addItem(data) {
    setDatabase(database.concat(data));
  }

  // adds new expenses price to currentBalance state
  function addBalance(data) {
    setBalance(Number(currentBalance) + Number(data));
  }
  // increments index state by 1.  // for whoever is working on this, we are having issues with the index state when you are add and delete buttons on the front end.  sometimes the index state does not match the database id
  function incrementIndex() {
    setIndex(currentIndex + 1);
  }

  return (
    <>
      <header>
        <img src={Pink} alt="Logo" />
        <h1>©</h1>
        {/* {<img src="../image/PinkA.jpg" alt="Pinky" className="logo" />} */}
        <div className="name">
          <h1>Team Pink Fairy Armadillo</h1>
        </div>
        <div className="innerHead"></div>
      </header>
      <div className="founders">
        <h3>
          Founders: Dane Corpion, Jonathan Oh, Daljit Gill, and Kris Sorensen ©
        </h3>
      </div>
      <div className="main">
        <div className="innerMain">
          <div className="container">
            <div className="box">
              <h1>Expenses</h1>
            </div>
            <div className="addExpense">
              <input
                type="amount"
                name="Amount"
                id="Amount"
                placeholder="Enter Cost"
              ></input>
              <input type="vendor" id="Vendor" placeholder="Vendor"></input>
              <input
                type="category"
                id="Category"
                placeholder="Category"
              ></input>
              <input type="date" id="Date"></input>
              <div className="btnContainer">
                <button className="submit" onClick={submitClick}>
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="balance">
              <h2>Balance: $ {currentBalance}</h2>
            </div>
            <div className="cards">
              {database.map((item, i) => (
                <div className="innerCard">
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
                      id={item.id}
                      className="remove"
                      onClick={() => {
                        deleteClick(item.id);
                      }}
                    >
                      {" "}
                      Remove Expense
                    </button>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
