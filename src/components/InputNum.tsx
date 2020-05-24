// For inputting max
import React from 'react';
import './InputNum.css';

function InputNum() {
  return (
    <form>
      <label htmlFor="max">Max #: </label>
      <input type="text" />
      <br></br>
      <label htmlFor="max">Min #: </label>
      <input type="text" />
    </form>
  );
}

export default InputNum;
