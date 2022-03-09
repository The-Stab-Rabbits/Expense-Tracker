import React from "react";
import Expenses from "./component/Expenses";
import Chart from "./component/Chart"

const App = () => {
  return (
    <div>
      <div>
        <Expenses />
      </div>
      <Chart />
    </div>
  );
};

export default App;
