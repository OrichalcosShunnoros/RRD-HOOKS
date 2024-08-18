import React, { useState } from 'react';
import '../assets/css/Calculadora.css'

export const Calculadora = ({ titulo }) => {
  const [result, setResult] = useState(0);
  const [val, setVal] = useState({ n1: 0, n2: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((preVal) => ({
      ...preVal,
      [name]: Number(value)
    }));
  };

  const calculateResult = (operation) => {
    const { n1, n2 } = val;
    let result;
    switch (operation) {
      case 'sumar':
        result = n1 + n2;
        break;
      case 'restar':
        result = n1 - n2;
        break;
      case 'multiplicar':
        result = n1 * n2;
        break;
      case 'dividir':
        result = n2 !== 0 ? n1 / n2 : 'Error: División por cero';
        break;
      default:
        result = 0;
    }
    setResult(result);
  };

  return (
    <section>
      <article>
        <h3>{titulo}</h3>
        <h2>result: {result}</h2>
        <input
            type="number"
            name="n1"
            value={val.n1}
            onChange={handleChange}
        />
        <input
            type="number"
            name="n2"
            value={val.n2}
            onChange={handleChange}
        />
        <div className='btns'>
          <button onClick={() => calculateResult('sumar')}>Addition</button>
          <button onClick={() => calculateResult('restar')}>subtract</button>
          <button onClick={() => calculateResult('multiplicar')}>Multiply</button>
          <button onClick={() => calculateResult('dividir')}>Division</button>
        </div>
      </article>
    </section>
  );
};

