import React, { useState } from "react";

// Submit button for our expense



//state:
// price : []
//Expenses Component
const Expenses = () => {
    const [price, setPrice] = useState([]);
    // const [vendor, setVendor] = useState(0);
    // const [category, setCat] = useState(0);
    // const [date, setDate] = useState(0);

    function submitClick() {
        const vendor = document.getElementById('Vendor').value
        const amount = document.getElementById('Amount').value
        const category = document.getElementById('Category').value
        const date = document.getElementById('Date').value

        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount, vendor: vendor, category: category, date: date })
        }
        fetch('/api/expenses', postOptions)
            .then(response => response.json())
            .then(data => {
                console.log("success")
                return setPrice(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        // setPrice = data => {
        //     (price.concat(data))
        // }
        setPrice(data => price.concat(data))
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
                <h1>Testing</h1>
                <ul>
                    {/* {price.map((item) => ( */}
                    <>
                        <li>Price: {price.amount}</li>
                        <li>Vendor: {price.vendor} </li>
                        <li>Category: {price.category} </li>
                        <li>Date:{price.date} </li>
                    </>
                    {/* ))} */}
                </ul>
            </div>
        </>
    );
};

export default Expenses
