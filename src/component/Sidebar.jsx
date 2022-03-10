import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";


const Sidebar = () => {
  const { month, setMonth, monthDatabase, setMonthDatabase, activeMonth, summary } = useContext(DataContext)


  return(
      <div className='side-bar'>
          <div className='month-tab' onClick={() => activeMonth('00')}>Main {month}</div>
          <div className='month-tab' onClick={() => activeMonth('01')}>January {month}</div>
          <div className='month-tab' onClick={() => activeMonth('02')}>February {month}</div>
          <div className='month-tab' onClick={() => activeMonth('03')}>March {month}</div>
          <div className='month-tab' onClick={() => activeMonth('04')}>April {month}</div>
          <div className='month-tab' onClick={() => activeMonth('05')}>May {month}</div>
          <div className='month-tab' onClick={() => activeMonth('06')}>June {month}</div>
          <div className='month-tab' onClick={() => activeMonth('07')}>July {month}</div>
          <div className='month-tab' onClick={() => activeMonth('08')}>August {month}</div>
          <div className='month-tab' onClick={() => activeMonth('09')}>September {month}</div>
          <div className='month-tab' onClick={() => activeMonth('10')}>October {month}</div>
          <div className='month-tab' onClick={() => activeMonth('11')}>November {month}</div>
          <div className='month-tab' onClick={() => activeMonth('12')}>December {month}</div>
          <div className='month-tab' onClick={() => summary()}>Summary</div>

      </div>

  )


}

export default Sidebar;