# groupscratchproject
Hello

git remote 

    // "start": "webpack serve  --hot --open",
    // "build": "webpack --config webpack.config.js --mode production"

    
Front End

- Ability to enter data and send it to the backend (POST).  Create function to send this data onclick of Button

Expenses
    Price
    Vendor
    Category (food, clothes, etc)
    Date

Bank Information
    Liquid Cash
    Bank Name

Investments
    Broker
        -Stock Value
    401k
        -401k Value

Debt
    Credit Card Debt
        -Debt Value
    Student Loans
        -Student Loan Amount


-Receive data from backend to display on page (GET) with onclick function-
-Remove expenses by sending (DELETE) request from backend, also refreses display with new updated data?



Server
    - Get request: get data that has already been inputed (loads on start)
    - Post request: for inputing data
    - Delete request: delte inputed data
    -  

Controller

Backend
    - setup sql database (what one?)
    /*
 install pg


Model
    require pool pg
    get uri from elephant
    create new instance of pool using connection string
    export pool

Controller

    setup controller



[SQL QUERY]

CREATE TABLE expense (
  Vendor varchar(255),
  Amount int,
  Date date,
  Category varchar(255)
);

INSERT INTO expense (Vendor, Amount, Date, Category)
VALUES (YachtSales, 20000000, CURRENT_DATE, Luxury);
