import React from "react";
import calculate from "../logic/Calculate";
import DisplayResult from "./displayResult";

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickEventlistener = this.clickEventlistener.bind(this);
  }

  clickEventlistener(currentValue) {
    if (currentValue.total != null) {
      this.setState({ total: currentValue.total });
    }

    this.setState({ next: currentValue.next });

    if (currentValue.operation != null) {
      this.setState({ operation: currentValue.operation });
    }
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
      <DisplayResult total={total} next={next} operation={operation}/>
    
      <div className="calculator-keys"> 

      <button type="button" className="all-clear" onClick={() => { this.clickEventlistener(calculate(this.state, 'AC')); }}>AC</button>
      <button type="button" className="plus-minus-sign" onClick={() => { this.clickEventlistener(calculate(this.state, '+/-')); }}>+/-</button>   
      <button type="button" className="percentage" onClick={() => { this.clickEventlistener(calculate(this.state, '%')); }}>%</button> 
      <button type="button" className="operator" onClick={() => { this.clickEventlistener(calculate(this.state, '÷')); }}>&divide;</button>

      <button type="button"  onClick={() => { this.clickEventlistener(calculate(this.state, '7')); }}>7</button>
      <button type="button" onClick={() => { this.clickEventlistener(calculate(this.state, '8')); }}>8</button>
      <button type="button" onClick={() => { this.clickEventlistener(calculate(this.state, '9')); }}>9</button>
      <button type="button" className="operator" onClick={() => { this.clickEventlistener(calculate(this.state, 'x')); }}>&times;</button>

      <button type="button"  onClick={() => { this.clickEventlistener(calculate(this.state, '4')); }}>4</button>
      <button type="button"  onClick={() => { this.clickEventlistener(calculate(this.state, '5')); }}>5</button>
      <button type="button"  onClick={() => { this.clickEventlistener(calculate(this.state, '6')); }}>6</button>
      <button type="button" className="operator" onClick={() => { this.clickEventlistener(calculate(this.state, '-')); }}>-</button> 

      <button type="button" onClick={() => { this.clickEventlistener(calculate(this.state, '1')); }}>1</button>
      <button type="button" onClick={() => { this.clickEventlistener(calculate(this.state, '2')); }}>2</button>
      <button type="button"  onClick={() => { this.clickEventlistener(calculate(this.state, '3')); }}>3</button>
      <button type="button" className="operator"  onClick={() => { this.clickEventlistener(calculate(this.state, '+')); }}>+</button>

      <button type="button"  className="zero" onClick={() => { this.clickEventlistener(calculate(this.state, '0')); }}>0</button>
      <button type="button" className="decimal"  onClick={() => { this.clickEventlistener(calculate(this.state, '.')); }}>.</button>
      <button type="button" className="operator" onClick={() => { this.clickEventlistener(calculate(this.state, '=')); }}>=</button>

      </div>
    </div>
    );
  }
}

  
  export default Calculator;
  