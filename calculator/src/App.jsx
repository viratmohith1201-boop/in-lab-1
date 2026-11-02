import React, { useState } from 'react';
import Result from './result';

function App() {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');

const sum = Number(num1) + Number(num2);

return ( <div> <h2>Calculator</h2>


  <input
    type="number"
    placeholder="Enter first number"
    onChange={(e) => setNum1(e.target.value)}
  />

  <br /><br />

  <input
    type="number"
    placeholder="Enter second number"
    onChange={(e) => setNum2(e.target.value)}
  />

  <Result result={sum} />
</div>


);
}

export default App;
