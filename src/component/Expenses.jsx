import React, { useState, useEffect } from "react";

//Expenses Component
const Expenses = () => {
    //created state to hold database
    const [state, setState] = useState([]);
    //created state to hold net price of expense extries
    const [currentBalance, setBalance] = useState(0);
    // created state to hold index of database extries
    const [currentIndex, setIndex] = useState(0)

    // upon rendering, sets state to current database 
    useEffect(() => {
        fetch('/api/get')
            .then(response => response.json())
            .then(data => setState(data))
    }, [])

    // //upon rending, sets currentBalance state to current database net price
    useEffect(() => {
        fetch('/api/getBalance')
            .then(response => response.json())
            .then(data => setBalance(data))
    }, [])

    // //upon rending, sets currentIndex to index of last entry of database
    useEffect(() => {
        fetch('/api/index')
            .then(response => response.json())
            .then(data => setIndex(data))
    }, [])


    //upon click, submits post requested, updated database with current extry.  Also updates current states with new information
    function submitClick() {
        console.log(state)
        const index = currentIndex
        incrementIndex()
        const vendor = document.getElementById('Vendor').value
        const amount = document.getElementById('Amount').value
        const category = document.getElementById('Category').value
        const date = document.getElementById('Date').value

        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: index, amount: amount, vendor: vendor, category: category, date: date })
        }
        fetch('/api/expenses', postOptions)
            .then(response => response.json())
            .then(data => {

                addBalance(data.amount)
                return addItem(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    function deleteClick(buttonIndex) {
        const id = buttonIndex
        const deleteOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(`/api/${id}`, deleteOptions)
            .then(response => response.json())
        fetch('/api/get')
            .then(response => response.json())
            .then(data => setState(data))
        fetch('/api/getBalance')
            .then(response => response.json())
            .then(data => setBalance(data))
        fetch('/api/index')
            .then(response => response.json())
            .then(data => setIndex(data))

    }
    // adds new extry to current state
    function addItem(data) {
        setState(state.concat(data))
    }

    // adds new expenses price to currentBalance state
    function addBalance(data) {
        setBalance(Number(currentBalance) + Number(data))
    }
    // increments index state by 1
    function incrementIndex() {
        setIndex(currentIndex + 1)
    }

    return (
        <>
            <div>
                <h1>Hello Expenses Component</h1>
                <input type='amount' name="Amount" id='Amount' placeholder="Enter Cost"></input>
                <input type='vendor' id='Vendor' placeholder="Vendor"></input>
                <input type='category' id='Category' placeholder="Category"></input>
                <input type='date' id='Date'></input>
                <button onClick={submitClick}> Submit</button>
            </div>
            <div>
                <h1>Balance</h1>
                <h2>{currentIndex}</h2>
                <li>Balance:
                    {currentBalance}
                </li>

                {state.map((item, i) => (
                    <>
                        <ul>
                            <li>Price: {item.amount}</li>
                            <li>Vendor: {item.vendor} </li>
                            <li>Category: {item.category} </li>
                            <li>Date:{item.date} </li>
                            <button id={item.id} onClick={() => { deleteClick(item.id) }}> Remove Expense</button>
                        </ul>
                    </>
                ))}
            </div>
        </>
    );
};

export default Expenses
