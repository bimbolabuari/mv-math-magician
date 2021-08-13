import React from "react";
import  { useState, setState } from 'react';
import  calculate from "../logic/Calculate";
import DisplayResult from "./DisplayResult";
import CalculatorButton from "./CalculatorButton";
import generateDisplayValue from '../helper/generateDisplayValue';

const Calculator = () => {
  const [calculateState, calculateStateHandler] = useState({ total: null, next: null, operation: null });

  const clickEventListener = (event) => {
    const value = event.target.value;
    let { total, next, operation } = calculate(calculateState, value);
  if (total === undefined) {
    total = calculateState.total;
  }
  if (next === undefined) {
    next = calculateState.next;
  }
  if (operation === undefined) {
    operation = calculateState.operation;
  }
  calculateStateHandler({ total, next, operation });
};

const displayValue = generateDisplayValue(calculateState);
return (
  <div className="calculator">
  <DisplayResult displayvalue={displayValue}/>
  <div className="calculator-keys"> 
    <CalculatorButton  value="AC"  clickEventListener={clickEventListener}/>
    <CalculatorButton  value="+/-" clickEventListener={clickEventListener}/>
    <CalculatorButton  value="%"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="÷"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="7"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="8"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="9"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="x"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="4"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="5"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="6"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="-"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="1"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="2"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="3"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="+"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="0"   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="."   clickEventListener={clickEventListener}/>
    <CalculatorButton  value="="   clickEventListener={clickEventListener}/>
  </div>
</div>
)
  }
  
  export default Calculator;
  