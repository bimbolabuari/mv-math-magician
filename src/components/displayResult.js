/* eslint-disable react/prop-types */
import React from 'react';

class DisplayResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
      render() {
        const { total, next, operation } = this.props;
        let display = 0;

        if (!total && !next && !operation) {
            display = 0;
          }else if (!total && next) {
            display = next;
          } else if (operation && total && !next) {
            display = `${total} ${operation}`;
          } else if (total && next && operation) {
            display = `${total} ${operation} ${next}`;
          } else {
              display = `${total}`;
          }
          return (
           <div className="calculator-screen">{display}</div>      
          );
      }
    }


    export default DisplayResult;