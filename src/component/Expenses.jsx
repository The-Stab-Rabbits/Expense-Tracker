import React, { useState, useEffect } from "react";
import "../styles/app.css";
import Pink from "../image/PinkA.jpg";
import MainDash from "./MainDash";
import MonthlyDash from "./MonthlyDash";
import Sidebar from "./Sidebar";
import { DataContext } from "./DataContext";

//Expenses Component
const Expenses = () => {
  //created state to hold database
  const [database, setDatabase] = useState([]);
  //created state to hold net price of expense extries
  const [currentBalance, setBalance] = useState(0);
  const [month, setMonth] = useState('00');
  const [monthDatabase, setMonthDatabase] = useState(null)
  // created state to hold index of database extries
  // const [currentIndex, setIndex] = useState(1);
  // upon rendering, sets state to current database
  
  // Intial Render 
  useEffect(() => {
    fetch("/api/get")
      .then((response) => response.json())
      .then((data) => setDatabase(data));
  }, []);


  //upon rending, sets currentBalance state to current database net price
  useEffect(() => {
    fetch("/api/getBalance")
      .then((response) => response.json())
      .then((data) => setBalance(data));
  }, []);

  //upon click, submits post requested, updated database with current extry.  Also updates current states with new information
  function submitClick() {

    const vendor = document.getElementById("Vendor").value;
    const amount = document.getElementById("Amount").value;
    const category = document.getElementById("Category").value;
    const date = document.getElementById("Date").value;
    console.log(date);
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amount,
        vendor: vendor,
        category: category,
        date: date,
      }),
    };

    fetch("/api/expenses", postOptions)
      .then((response) => response.json())
      .then(response => {
        setDatabase([...database, ...response])
      })
      .then(() => fetch('/api/getBalance'))
      .then((response) => response.json())
      .then((response)=> setBalance(response))

  

  }

  function deleteClick(id) {
    const deleteOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    
    fetch(`/api/${id}`, deleteOptions)
      .then(() => console.log("Delete Successful"))
      .then(() => {
        setDatabase(database.filter(x => x.id !== id))
      })
      .then(() => fetch('/api/getBalance'))
      .then((response) => response.json())
      .then((response)=> setBalance(response))
    
    // const balance = await fetch('/api/getBalance')
    // .then((response) => response.json())
    // .then((data) => setBalance(data));
  }

  function activeMonth(monthNum) {
    setMonth(monthNum);
    console.log('currMonth', month)
    // fetch(`/api/month/${monthNum}`)
    // .then((response=> response.json()))
    // .then((data) => setMonthDatabase(data))
  }

  return (
    <>

      <header>
        <img src={Pink} alt="Logo" />
        <h1>©</h1>
        <div className="name">
          <h1>Stab Rabbits</h1>
        </div>
      </header>


      <div className="main">
        <div className="innerMain">


          <div className="container">
            <h1>Expenses</h1>
            <div className="addExpense">
              
              <input id="Amount" placeholder="Enter Cost"></input>

              <input id="Vendor" placeholder="Vendor"></input>

              <input id="Category" placeholder="Category"></input>
              
              <input type= 'date' id="Date"></input>

              <div className="btnContainer">
                <button className="submit" onClick={submitClick}>
                  Submit
                </button>
              </div>

            </div>
          </div>

          
          <div className='dashboard'>
            <DataContext.Provider value={{ database, setDatabase, currentBalance, setBalance, month, setMonth, monthDatabase, setMonthDatabase, deleteClick, submitClick, activeMonth}}>
              <Sidebar/>
              {month === '00' ? <MainDash/> : <MonthlyDash />}

            </DataContext.Provider>
          </div>

        </div>
      </div>
    </>
  );
};

export default Expenses;
