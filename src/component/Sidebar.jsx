import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";


const Sidebar = () => {
  const { month, setMonth, monthDatabase, setMonthDatabase, activeMonth, summary } = useContext(DataContext)


  return(
      <div className='side-bar'>
          <div className='month-tab' onClick={() => activeMonth('00')}>Main </div>
          <div className='month-tab' onClick={() => activeMonth('01')}>January </div>
          <div className='month-tab' onClick={() => activeMonth('02')}>February </div>
          <div className='month-tab' onClick={() => activeMonth('03')}>March </div>
          <div className='month-tab' onClick={() => activeMonth('04')}>April </div>
          <div className='month-tab' onClick={() => activeMonth('05')}>May </div>
          <div className='month-tab' onClick={() => activeMonth('06')}>June </div>
          <div className='month-tab' onClick={() => activeMonth('07')}>July </div>
          <div className='month-tab' onClick={() => activeMonth('08')}>August </div>
          <div className='month-tab' onClick={() => activeMonth('09')}>September </div>
          <div className='month-tab' onClick={() => activeMonth('10')}>October </div>
          <div className='month-tab' onClick={() => activeMonth('11')}>November </div>
          <div className='month-tab' onClick={() => activeMonth('12')}>December </div>
          <div className='month-tab' onClick={() => summary()}>Summary</div>

      </div>

  )


}

export default Sidebar;