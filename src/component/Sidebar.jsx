import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";


const Sidebar = () => {
  const { month, setMonth, monthDatabase, setMonthDatabase, activeMonth } = useContext(DataContext)


  return(
      <div className='side-bar'>
          <div className='month-tab' onClick={() => activeMonth('00')}>Main {month}</div>
          <div className='month-tab' onClick={() => activeMonth('01')}>January {month}</div>
          <div className='month-tab' onClick={() => activeMonth('02')}>February {month}</div>

      </div>

  )


}

export default Sidebar;