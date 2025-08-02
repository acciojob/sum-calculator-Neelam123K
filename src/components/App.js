import React, {useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
const [Number, setNumber] = useState('');
const [numbers, setNumbers] = useState([]);
const [sum, setSum] = useState(0);
  // Function to handle the click event

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setNumbers(prevNumbers => [...prevNumbers, num]);
    }
  };

  useEffect(() => {
    const calculateSum = async () => {
      const total = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(numbers.reduce((acc, curr) => acc + curr, 0));
        }, 0);
      });
      setSum(total);
    };
    calculateSum();
  }, [numbers]);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" value={Number} onChange={(e) => setNumber(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleChange(e);
            }}
          
          }
        />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
