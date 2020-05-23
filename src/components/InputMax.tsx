// For inputting max
import React from 'react';
import './InputMax.css';

function InputNum() {
  return (
    <div className="Input-row">
      <div>
        <h3>Max #: </h3>
      </div>
      <div className="Input">
        <input type="text" />
      </div>
    </div>
  );
}

export default InputNum;
