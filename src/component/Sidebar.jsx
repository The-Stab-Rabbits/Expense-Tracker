import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";


const Sidebar = () => {
  const { month, setMonth, monthDatabase, setMonthDatabase, activeMonth } = useContext(DataContext)


  return(
      <div className='side-bar'>
          <div onClick={() => activeMonth('01')}>January {month}</div>
          <div onClick={() => activeMonth('02')}>Feb {month}</div>

      </div>

  )


}

export default Sidebar;