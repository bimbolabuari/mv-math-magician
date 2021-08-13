import React from "react";
import calculate from "../logic/Calculate";
import DisplayResult from "./DisplayResult";
import CalculatorButton from "./CalculatorButton";
import generateDisplayValue from '../helper/generateDisplayValue';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickEventListener = (event) => {
    const object = this.state;
    const value = event.target.value;
    const result = calculate(object, value);
    this.setState(result);
  }

  render() {
    const displayValue = generateDisplayValue(this.state);
    return (
      <div className="calculator">
      <DisplayResult displayvalue={displayValue}/>
      <div className="calculator-keys"> 
        <CalculatorButton  value="AC"  clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="+/-" clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="%"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="÷"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="7"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="8"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="9"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="x"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="4"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="5"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="6"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="-"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="1"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="2"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="3"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="+"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="0"   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="."   clickEventListener={this.clickEventListener}/>
        <CalculatorButton  value="="   clickEventListener={this.clickEventListener}/>
      </div>
    </div>
    );
  }
}

  
  export default Calculator;
  