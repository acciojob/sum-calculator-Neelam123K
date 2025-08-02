import React, { useState, useEffect } from 'react';

const App = () => {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setNumbers((prev) => [...prev, parsedValue]);
      setNumber(''); // clear the input after adding
    }
  };

  useEffect(() => {
    const calculateSum = async () => {
      const total = await new Promise((resolve) => {
        setTimeout(() => {
          const result = numbers.reduce((acc, num) => acc + num, 0);
          resolve(result);
        }, 0); // async without delay
      });

      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleChange(e);
        }}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
